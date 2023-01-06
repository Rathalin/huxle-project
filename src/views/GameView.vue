<script setup lang="ts">
import Board from '@/components/ui/main/game/board/WordBoard.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import ResetWarningDialog from '@/components/ui/main/game/board/dialogs/ResetWarningDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/InputKeyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useWordsStore } from '@/stores/words.store'
import { useTimer } from '@/composables/Timer'
import type { Ref } from 'vue'
import { useLocaleStore } from '@/stores/locale.store'
import { i18n } from '@/locales/i18n'
import type { LetterStateOption } from '@/components/ui/main/game/board/letter-state'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import { useLocalStorageSupport } from '@/composables/LocalStorageSupport'

const invalidLinkDialogEl = ref<InstanceType<typeof InvalidLinkDialog>>()
const winnerDialogEl = ref<InstanceType<typeof WinnerDialog>>()
const loserDialogEl = ref<InstanceType<typeof LoserDialog>>()
const statsDialogEl = ref<InstanceType<typeof StatsDialog>>()
const resetWarningDialogEl = ref<InstanceType<typeof ResetWarningDialog>>()
const { getTime, stopTimer, startTimer, resetTimer } = useTimer()
const {
  initializeVariablesFromLocalStorage,
  saveVariablesToLocalStorage,
  clearLocalStorage,
} = useLocalStorageSupport()

const currentRowIndex = ref(0)
const currentRow = ref(0)
const gameDone = ref(false)

let keyboardLocked = false
let rowComplete = false

const { words, wordEN, wordDE } = useWordsStore()
const solution =
  i18n.global.locale === 'en'
    ? ref(wordEN.toLowerCase())
    : ref(wordDE.toLowerCase())

const keyboardStates: Record<string, LetterStateOption> = reactive({})
const answerArray: Ref<(string | null)[]> = ref(solution.value.split(''))

const localeStore = useLocaleStore()
localeStore.$subscribe(
  (_, state) =>
    (solution.value =
      state.selectedLocale === 'en'
        ? wordEN.toLowerCase()
        : wordDE.toLowerCase())
)

const keyBoardInput = (e: KeyboardEvent) => {
  const alphaRegex = /^[A-Za-z]$/
  if (alphaRegex.test(e.key) || e.key === 'Backspace' || e.key === 'Enter') {
    pressedKey(e.key)
  }
}
window.addEventListener('keyup', keyBoardInput)

onUnmounted(() => {
  window.removeEventListener('keyup', keyBoardInput)
  if (!gameDone.value) {
    const stateObject = {
      currentRow: currentRow.value,
      currentRowIndex: currentRowIndex.value,
      words: words,
      solution: solution.value,
      keyboardStates: keyboardStates,
      answerArray: answerArray.value,
      keyboardLocked: keyboardLocked,
      rowComplete: rowComplete,
    }
    saveVariablesToLocalStorage(stateObject)
  }
})

onMounted(() => {
  resetTimer()
  startTimer()
  checkValidLink()
  initializeVariables()
})

function checkValidLink() {
  const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/
  if (wordEN.length !== 5 || wordDE.length !== 5) {
    invalidLinkDialogEl.value?.openDialog()
  }
  if (specialCharacters.test(wordEN) || specialCharacters.test(wordDE)) {
    invalidLinkDialogEl.value?.openDialog()
  }
}

function initializeVariables() {
  const localStorageResult = initializeVariablesFromLocalStorage()
  if (localStorageResult) {
    const states = JSON.parse(localStorageResult)
    if (states.solution === solution) {
      currentRow.value = states.currentRow
      currentRowIndex.value = states.currentRowIndex
      solution.value = states.solution
      answerArray.value = states.answerArray
      keyboardLocked = states.keyboardLocked
      rowComplete = states.rowComplete

      words.forEach((row, i) => {
        row.forEach((letter, j) => {
          letter[0] = states.words[i][j][0]
          letter[1] = states.words[i][j][1]
        })
      })

      for (let letter in Object.keys(keyboardStates)) {
        setKeyboardState(Object.values(keyboardStates)[letter], letter)
      }
    }
  }
  clearLocalStorage()
}

function pressedKey(letter: string) {
  if (letter === 'Backspace') {
    removeLetter()
  } else if (letter === 'Enter') {
    checkWord()
  } else {
    addLetter(letter.toLowerCase())
  }
}

function addLetter(letter: string) {
  if (keyboardLocked) {
    return
  }
  words[currentRow.value][currentRowIndex.value][0] = letter
  currentRowIndex.value++
  if (currentRowIndex.value == 5) {
    keyboardLocked = true
    rowComplete = true
  }
}

function removeLetter() {
  if (currentRowIndex.value === 5) {
    keyboardLocked = false
    rowComplete = false
  }
  if (currentRowIndex.value === 0) {
    return
  }
  words[currentRow.value][currentRowIndex.value - 1][0] = ' '
  currentRowIndex.value--
}

function checkWord() {
  if (!rowComplete) {
    return
  }
  const word: string[] = []
  answerArray.value = solution.value.split('')
  words[currentRow.value].forEach((letter) => {
    word.push(letter[0])
  })
  if (word.join('') === solution.value) {
    words[currentRow.value].forEach((letter) => {
      letter[1] = 'correct'
    })
    gameDone.value = true
    winnerDialogEl.value?.openDialog()
    stopTimer()
    clearLocalStorage()
    setTimeout(() => {
      winnerDialogEl.value?.closeDialog()
      statsDialogEl.value?.openDialog()
    }, 2000)
  } else {
    let state: LetterStateOption = 'absent'
    words[currentRow.value].forEach((letter, index) => {
      state = checkCorrect(letter[0], index)
      letter[1] = state
      setKeyboardState(state, letter[0])
    })
    words[currentRow.value].forEach((letter) => {
      state = checkPresent(letter)
      letter[1] = state
      setKeyboardState(state, letter[0])
    })
    if (currentRow.value === 5) {
      gameDone.value = true
      loserDialogEl.value?.openDialog()
      stopTimer()
      clearLocalStorage()
      setTimeout(() => {
        loserDialogEl.value?.closeDialog()
        statsDialogEl.value?.openDialog()
      }, 2000)
    }
    keyboardLocked = false
    rowComplete = false
    currentRow.value++
    currentRowIndex.value = 0
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
    (keyboardStates[letter] && keyboardStates[letter] === 'correct') ||
    (keyboardStates[letter] && state === 'absent')
  ) {
    return
  } else {
    keyboardStates[letter] = state
  }
}

defineEmits<{
  (e: 'keyInput', key: string): void
}>()
</script>

<template>
  <div class="flex flex-col items-center lg:mt-6">
    <Board />
    <Keyboard :letter-states="keyboardStates" @keyInput="pressedKey" />
    <PrimaryButton
      v-if="gameDone"
      class="mt-2 px-6"
      @click="statsDialogEl?.openDialog()"
    >
      Stats
    </PrimaryButton>

    <InvalidLinkDialog ref="invalidLinkDialogEl" />
    <WinnerDialog ref="winnerDialogEl" />
    <LoserDialog ref="loserDialogEl" />
    <StatsDialog
      ref="statsDialogEl"
      :guesses="currentRow + 1"
      :time="getTime()"
    />
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
