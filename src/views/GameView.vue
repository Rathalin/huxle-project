<script setup lang="ts">
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
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
    <PrimaryButton @click="onTestClick">Test</PrimaryButton>
    <SoftDialog ref="dialogEl">
      <template v-slot:header></template>
      {{ $route.hash }}
    </SoftDialog>
  </div>
</template>
