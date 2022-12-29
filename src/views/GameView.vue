<script setup lang="ts">
import DebugButton from '@/components/ui/buttons/DebugButton.vue'
import Board from '@/components/ui/main/game/board/Board.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import ResetWarningDialog from '@/components/ui/main/game/board/dialogs/ResetWarningDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/Keyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

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
</script>

<template>
  <div class="flex flex-col items-center lg:mt-6">
    <Board />
    <Keyboard :letter-states="{}" />
    <div class="flex flex-wrap items-center gap-2 pt-6">
      <DebugButton @click="() => invalidLinkDialogEl?.openDialog()"
        >Invalid link dialog</DebugButton
      >
      <DebugButton @click="() => winnerDialogEl?.openDialog()"
        >Winner dialog</DebugButton
      >
      <DebugButton @click="() => loserDialogEl?.openDialog()"
        >Loser dialog</DebugButton
      >
      <DebugButton @click="() => statsDialogEl?.openDialog()"
        >Stats dialog</DebugButton
      >
      <DebugButton @click="() => resetWarningDialogEl?.openDialog()"
        >Reset warning dialog</DebugButton
      >
    </div>

    <InvalidLinkDialog ref="invalidLinkDialogEl" />
    <WinnerDialog ref="winnerDialogEl" />
    <LoserDialog ref="loserDialogEl" />
    <StatsDialog ref="statsDialogEl" :guesses="1" time="00:04:20" />
    <ResetWarningDialog ref="resetWarningDialogEl" />
  </div>
</template>
