<script setup lang="ts">
import DebugButton from '@/components/ui/buttons/DebugButton.vue'
import Board from '@/components/ui/main/game/board/Board.vue'
import InvalidLinkDialog from '@/components/ui/main/game/board/dialogs/InvalidLinkDialog.vue'
import LoserDialog from '@/components/ui/main/game/board/dialogs/LoserDialog.vue'
import WinnerDialog from '@/components/ui/main/game/board/dialogs/WinnerDialog.vue'
import Keyboard from '@/components/ui/main/game/keyboard/Keyboard.vue'
import StatsDialog from '@/components/ui/main/game/stats/StatsDialog.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hash = route.params.hash

const invalidLinkDialogEl = ref<InstanceType<typeof InvalidLinkDialog>>()
const winnerDialogEl = ref<InstanceType<typeof WinnerDialog>>()
const loserDialogEl = ref<InstanceType<typeof LoserDialog>>()
const statsDialogEl = ref<InstanceType<typeof StatsDialog>>()
</script>

<template>
  <div class="lg:mt-6 flex flex-col items-center">
    <Board />
    <Keyboard :letter-states="{}" />
    <div class="pt-6 flex flex-col gap-2 items-center">
      <DebugButton @click="() => invalidLinkDialogEl?.open()"
        >Invalid link dialog</DebugButton
      >
      <DebugButton @click="() => winnerDialogEl?.open()"
        >Winner dialog</DebugButton
      >
      <DebugButton @click="() => loserDialogEl?.open()"
        >Loser dialog</DebugButton
      >
      <DebugButton @click="() => statsDialogEl?.open()"
        >Stats dialog</DebugButton
      >
    </div>

    <InvalidLinkDialog ref="invalidLinkDialogEl" />
    <WinnerDialog ref="winnerDialogEl" />
    <LoserDialog ref="loserDialogEl" />
    <StatsDialog ref="statsDialogEl" :guesses="1" time="00:04:20" />
  </div>
</template>
