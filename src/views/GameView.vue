<script setup lang="ts">
import DebugButton from '@/components/ui/buttons/DebugButton.vue'
import Board from '@/components/ui/main/game/board/WordBoard.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import ResetWarningDialog from '@/components/ui/main/game/board/dialogs/ResetWarningDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/InputKeyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useWordsStore } from '@/stores/words.store'
import { getTime, resetTimer, startTimer, stopTimer } from '@/composables/Timer'
import type { Ref } from 'vue'

const route = useRoute()
if (
  typeof route.params.wordEN !== 'string' ||
  typeof route.params.wordDE !== 'string'
)
  throw new Error(
    `Param "wordEN" or "wordDE" is not a string. Path: ${route.fullPath}`
  )
// the words will be encoded and decoded using Base64
const wordEN = atob(route.params.wordEN)
const wordDE = atob(route.params.wordDE)

const invalidLinkDialogEl = ref<InstanceType<typeof InvalidLinkDialog>>()
const winnerDialogEl = ref<InstanceType<typeof WinnerDialog>>()
const loserDialogEl = ref<InstanceType<typeof LoserDialog>>()
const statsDialogEl = ref<InstanceType<typeof StatsDialog>>()
const resetWarningDialogEl = ref<InstanceType<typeof ResetWarningDialog>>()

let currentRowIndex = ref(0)
let currentRow = ref(0)

let keyboardLocked = false
let rowComplete = false

const { words, solution, resetBoard } = useWordsStore()

const keyboardStates: Record<string, string> = {}
const answerArray: Ref<(string | null)[]> = ref(solution.split(''))

onMounted(() => {
  resetTimer()
  startTimer()
})

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
  answerArray.value = solution.split('')
  words[currentRow.value].forEach((letter) => {
    word.push(letter[0])
  })
  if (word.join('') === solution) {
    winnerDialogEl.value?.openDialog()
    stopTimer()
    resetBoard()
  } else {
    let state = 'absent'
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
      loserDialogEl.value?.openDialog()
      stopTimer()
      resetBoard()
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
  let letterstate = 'absent'
  if (answerArray.value.includes(letter[0])) {
    letterstate = 'present'
    answerArray.value[answerArray.value.indexOf(letter[0])] = null
  }
  return letterstate
}

function checkCorrect(letter: string, position: number) {
  let letterstate = 'absent'
  if (answerArray.value.includes(letter)) {
    solution.split('').forEach((element, index) => {
      if (element === letter && position === index) {
        letterstate = 'correct'
        answerArray.value[index] = null
      }
    })
  }
  return letterstate
}

function setKeyboardState(state: string, letter: string) {
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
    <Keyboard :letter-states="{ keyboardStates }" @keyInput="pressedKey" />
    <div class="flex flex-wrap items-center gap-2 pt-6">
      <DebugButton @click="() => invalidLinkDialogEl?.openDialog()"
        >Invalid link dialog
      </DebugButton>
      <DebugButton @click="() => winnerDialogEl?.openDialog()"
        >Winner dialog
      </DebugButton>
      <DebugButton @click="() => loserDialogEl?.openDialog()"
        >Loser dialog
      </DebugButton>
      <DebugButton @click="() => statsDialogEl?.openDialog()"
        >Stats dialog
      </DebugButton>
      <DebugButton @click="() => resetWarningDialogEl?.openDialog()"
        >Reset warning dialog
      </DebugButton>
    </div>

    <InvalidLinkDialog ref="invalidLinkDialogEl" />
    <WinnerDialog ref="winnerDialogEl" />
    <LoserDialog ref="loserDialogEl" />
    <StatsDialog ref="statsDialogEl" :guesses="currentRow" :time="getTime()" />
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
