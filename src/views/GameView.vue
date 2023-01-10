<script setup lang="ts">
import Board from '@/components/ui/main/game/board/WordBoard.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import ResetWarningDialog from '@/components/ui/main/game/board/dialogs/ResetWarningDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/InputKeyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useWordsStore } from '@/stores/words.store'
import { useTimer } from '@/composables/Timer'
import { useLocaleStore } from '@/stores/locale.store'
import { i18n } from '@/locales/i18n'
import type { LetterStateOption } from '@/components/ui/main/game/board/letter-state'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import { useLocalStorageSupport } from '@/composables/LocalStorageSupport'
import { useGameStore } from '@/stores/game.store'
import { useRoute } from 'vue-router'

const invalidLinkDialogEl = ref<InstanceType<typeof InvalidLinkDialog>>()
const winnerDialogEl = ref<InstanceType<typeof WinnerDialog>>()
const loserDialogEl = ref<InstanceType<typeof LoserDialog>>()
const statsDialogEl = ref<InstanceType<typeof StatsDialog>>()
const resetWarningDialogEl = ref<InstanceType<typeof ResetWarningDialog>>()
const { getTime, stopTimer, resetTimer } = useTimer()
const {
  initializeVariablesFromLocalStorage,
  saveVariablesToLocalStorage,
  clearLocalStorage,
} = useLocalStorageSupport()

const wordStore = useWordsStore()
const gameStore = useGameStore()

const route = useRoute()
// the words will be encoded and decoded using Base64
const wordEN = ref(atob(route.params.wordEN.toString()))
const wordDE = ref(atob(route.params.wordDE.toString()))

const solution =
  i18n.global.locale === 'en'
    ? ref(wordEN.value.toLowerCase())
    : ref(wordDE.value.toLowerCase())

const localeStore = useLocaleStore()
localeStore.$subscribe(
  (_, state) =>
    (solution.value =
      state.selectedLocale === 'en'
        ? wordEN.value.toLowerCase()
        : wordDE.value.toLowerCase())
)

gameStore.$subscribe((_, state) => {
  saveGameStates()
})

wordStore.$subscribe((_, state) => {
  saveGameStates()
})

function saveGameStates() {
  if (gameStore.state === 'playing') {
    const stateObject = {
      currentRow: gameStore.currentRow,
      currentRowIndex: gameStore.currentRowIndex,
      words: wordStore.words,
      solution: solution.value,
      keyboardStates: gameStore.keyboardStates,
      answerArray: answerArray,
      keyboardLocked: gameStore.keyboardLocked,
      rowComplete: gameStore.rowComplete,
    }
    saveVariablesToLocalStorage(stateObject)
  }
}

const answerArray = ref<(string | null)[]>(solution.value.split(''))
const keyBoardInput = (e: KeyboardEvent) => {
  const alphaRegex = /^[A-Za-z]$/
  if (alphaRegex.test(e.key) || e.key === 'Backspace' || e.key === 'Enter') {
    pressedKey(e.key)
  }
}
window.addEventListener('keyup', keyBoardInput)

onUnmounted(() => {
  window.removeEventListener('keyup', keyBoardInput)
})

onMounted(() => {
  resetTimer()
  checkValidLink()
  initializeVariables()
})

watch(solution, (currentValue, oldValue) => {
  answerArray.value = currentValue.split('')
})

const guesses = computed(() => Math.min(gameStore.currentRow + 1, 6))

function checkValidLink() {
  const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/
  if (wordEN.value.length !== 5 || wordDE.value.length !== 5) {
    invalidLinkDialogEl.value?.openDialog()
  }
  if (
    specialCharacters.test(wordEN.value) ||
    specialCharacters.test(wordDE.value)
  ) {
    invalidLinkDialogEl.value?.openDialog()
  }
}

function initializeVariables() {
  const localStorageResult = initializeVariablesFromLocalStorage()
  if (localStorageResult) {
    const states = JSON.parse(localStorageResult)
    if (states.solution === solution.value) {
      gameStore.currentRow = states.currentRow
      gameStore.currentRowIndex = states.currentRowIndex
      solution.value = states.solution
      answerArray.value = states.answerArray
      gameStore.keyboardLocked = states.keyboardLocked
      gameStore.rowComplete = states.rowComplete

      wordStore.words.forEach((row, i) => {
        row.forEach((letter, j) => {
          letter[0] = states.words[i][j][0]
          letter[1] = states.words[i][j][1]
        })
      })

      for (let letter in Object.keys(gameStore.keyboardStates)) {
        setKeyboardState(
          Object.values(gameStore.keyboardStates)[letter],
          letter
        )
      }
    }
  }
  clearLocalStorage()
}

function pressedKey(letter: string) {
  if (gameStore.state === 'playing') {
    if (letter === 'Backspace') {
      removeLetter()
    } else if (letter === 'Enter') {
      checkWord()
    } else {
      addLetter(letter.toLowerCase())
    }
  }
}

function addLetter(letter: string) {
  if (gameStore.keyboardLocked) {
    return
  }
  wordStore.words[gameStore.currentRow][gameStore.currentRowIndex][0] = letter
  gameStore.currentRowIndex++
  if (gameStore.currentRowIndex == 5) {
    gameStore.keyboardLocked = true
    gameStore.rowComplete = true
  }
}

function removeLetter() {
  if (gameStore.currentRowIndex === 5) {
    gameStore.keyboardLocked = false
    gameStore.rowComplete = false
  }
  if (gameStore.currentRowIndex === 0) {
    return
  }
  wordStore.words[gameStore.currentRow][gameStore.currentRowIndex - 1][0] = ' '
  gameStore.currentRowIndex--
}

function checkWord() {
  if (!gameStore.rowComplete) {
    return
  }
  const word: string[] = []
  answerArray.value = solution.value.split('')
  wordStore.words[gameStore.currentRow].forEach((letter) => {
    word.push(letter[0])
  })
  if (word.join('') === solution.value) {
    wordStore.words[gameStore.currentRow].forEach((letter) => {
      letter[1] = 'correct'
    })
    gameStore.state = 'won'
    winnerDialogEl.value?.openDialog()
    stopTimer()
    clearLocalStorage()
    setTimeout(() => {
      winnerDialogEl.value?.closeDialog()
      statsDialogEl.value?.openDialog()
    }, 2000)
  } else {
    let state: LetterStateOption = 'absent'
    wordStore.words[gameStore.currentRow].forEach((letter, index) => {
      state = checkCorrect(letter[0], index)
      letter[1] = state
      setKeyboardState(state, letter[0])
    })
    wordStore.words[gameStore.currentRow].forEach((letter) => {
      state = checkPresent(letter)
      letter[1] = state
      setKeyboardState(state, letter[0])
    })
    if (gameStore.currentRow === 5) {
      gameStore.state = 'lost'
      loserDialogEl.value?.openDialog()
      stopTimer()
      clearLocalStorage()
      setTimeout(() => {
        loserDialogEl.value?.closeDialog()
        statsDialogEl.value?.openDialog()
      }, 2000)
    }
    gameStore.keyboardLocked = false
    gameStore.rowComplete = false
    gameStore.currentRow++
    gameStore.currentRowIndex = 0
  }
}

function checkPresent(letter: string[]) {
  if (letter[1] === 'correct') {
    return letter[1]
  }
  let letterstate: LetterStateOption = 'absent'
  if (answerArray.value.includes(letter[0])) {
    letterstate = 'present'
    answerArray.value[answerArray.value.indexOf(letter[0])] = null
  }
  return letterstate
}

function checkCorrect(letter: string, position: number) {
  let letterstate: LetterStateOption = 'absent'
  if (answerArray.value.includes(letter)) {
    solution.value.split('').forEach((element, index) => {
      if (element === letter && position === index) {
        letterstate = 'correct'
        answerArray.value[index] = null
      }
    })
  }
  return letterstate
}

function setKeyboardState(state: LetterStateOption, letter: string) {
  if (
    (gameStore.keyboardStates[letter] &&
      gameStore.keyboardStates[letter] === 'correct') ||
    (gameStore.keyboardStates[letter] && state === 'absent')
  ) {
    return
  } else {
    gameStore.keyboardStates[letter] = state
  }
}

defineEmits<{
  (e: 'keyInput', key: string): void
}>()
</script>

<template>
  <div class="flex flex-col items-center lg:mt-6">
    <Board />
    <Keyboard
      :letter-states="gameStore.keyboardStates"
      @keyInput="pressedKey"
    />
    <PrimaryButton
      v-if="gameStore.state === 'won'"
      class="mt-2 px-6"
      @click="statsDialogEl?.openDialog()"
    >
      Stats
    </PrimaryButton>

    <InvalidLinkDialog ref="invalidLinkDialogEl" />
    <WinnerDialog ref="winnerDialogEl" :guesses="guesses" />
    <LoserDialog ref="loserDialogEl" />
    <StatsDialog ref="statsDialogEl" :guesses="guesses" :time="getTime()" />
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
