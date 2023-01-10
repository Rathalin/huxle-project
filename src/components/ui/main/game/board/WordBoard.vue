<script setup lang="ts">
import { useWordsStore } from '@/stores/words.store'
import InputLetter from './InputLetter.vue'

const wordsStore = useWordsStore()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
      class="flex flex-row gap-1"
      v-for="(word, row) of wordsStore.words"
      :key="row"
    >
      <InputLetter
        v-for="(key, col) in word"
        :letter="key[0]"
        :state="key[1]"
        :key="row + col"
        :animation-delay="`${(row + col) * 100}ms`"
      />
    </div>
  </div>
</template>
