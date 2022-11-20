<script setup lang="ts">
import Board from '@/components/ui/main/game/board/Board.vue'
import Keyboard from '@/components/ui/main/game/keyboard/Keyboard.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const hash = route.params.hash
console.log(`Game hash: ${hash}`)
</script>

<template>
  <div class="lg:mt-6 flex flex-col items-center">
    <Board word="huxle" />
    <Keyboard :letter-states="{}" />
  </div>
</template>
