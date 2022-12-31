<script setup lang="ts">
import DebugButton from '@/components/ui/buttons/DebugButton.vue'
import Board from '@/components/ui/main/game/board/Board.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import ResetWarningDialog from '@/components/ui/main/game/board/dialogs/ResetWarningDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/Keyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useWordsStore } from '@/stores/words.store'

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

let currentRowIndex = 0
let currentRow = 0

let keyboardLocked = false
let rowComplete = false
let startTime = 0
let endTime = 0

const { $state } = useWordsStore()

onMounted(() => {
  startTime = Date.now()
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
  console.log($state.words[currentRow])
  $state.words[currentRow][currentRowIndex][0] = letter
  currentRowIndex++
  if (currentRowIndex == 5) {
    keyboardLocked = true
    rowComplete = true
  }
}

function removeLetter() {
  if (currentRowIndex === 5) {
    keyboardLocked = false
    rowComplete = false
  }
  if (currentRowIndex === 0) {
    return
  }
  $state.words[currentRow][currentRowIndex - 1][0] = ' '
  currentRowIndex--
}

function checkWord() {
  if (!rowComplete) {
    return
  }
  const word: string[] = []
  $state.words[currentRow].forEach((letter) => {
    word.push(letter[0])
  })
  if (word.join('') === $state.solution) {
    winnerDialogEl.value?.openDialog()
    endTime = Date.now()
  } else {
    $state.words[currentRow].forEach((letter, index) => {
      letter[1] = checkPresent(letter[0], index)
    })
    if (currentRow === 5) {
      loserDialogEl.value.openDialog()
      endTime = Date.now()
    }
    keyboardLocked = false
    rowComplete = false
    currentRow++
    currentRowIndex = 0
  }
}

function checkPresent(letter: string, position: number) {
  let letterstate = 'absent'
  if ($state.solution.includes(letter)) {
    letterstate = 'present'
    $state.solution.split('').forEach((element, index) => {
      if (element === letter && position === index) {
        letterstate = 'correct'
      }
    })
  }
  return letterstate
}

defineEmits<{
  (e: 'keyInput', key: string): void
}>()
</script>

<template>
  <div class="flex flex-col items-center lg:mt-6">
    <Board />
    <Keyboard :letter-states="{}" @keyInput="pressedKey" />
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
    <StatsDialog
      ref="statsDialogEl"
      :guesses="currentRow + 1"
      :time="(endTime - startTime).toString()"
    />
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
