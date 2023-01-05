<script setup lang="ts">
import { useWordsStore } from '@/stores/words.store'
import InputLetter from './InputLetter.vue'

const wordsStore = useWordsStore()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div
      class="flex flex-row gap-1"
      v-for="(word, i) of wordsStore.words"
      :key="i"
    >
      <InputLetter
        v-for="(key, j) in word"
        :letter="key[0]"
        :state="key[1]"
        :key="j"
      />
    </div>
  </div>
</template>
