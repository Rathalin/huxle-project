<script setup lang="ts">
import DebugButton from '@/components/ui/buttons/DebugButton.vue'
import SoftDialog from '@/components/ui/dialogs/SoftDialog.vue'
import Board from '@/components/ui/main/game/board/Board.vue'
import Keyboard from '@/components/ui/main/game/keyboard/Keyboard.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dialogEl = ref<InstanceType<typeof SoftDialog> | null>(null)

const hash = route.params.hash

function onTestClick(_e: Event) {
  dialogEl.value?.open()
}
</script>

<template>
  <div class="lg:mt-6 flex flex-col items-center">
    <Board word="huxle" />
    <Keyboard :letter-states="{}" />
    <div class="pt-6">
      <DebugButton @click="onTestClick">Show invalid link dialog</DebugButton>
      <SoftDialog ref="dialogEl">
        <template v-slot:header>
          <span>{{ $t('view.game.dialog.invalid-link.heading.text') }}</span>
        </template>
        <div>{{ $t('view.game.dialog.invalid-link.content.text') }}</div>
      </SoftDialog>
    </div>
  </div>
</template>
