<script setup lang="ts">
import LetterInput from './LetterInput.vue'
import { useWordsStore } from '@/stores/words.store'

const { $state } = useWordsStore()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-1" v-for="(word, i) of $state.words" :key="i">
      <LetterInput
        v-for="(key, j) in word"
        :state="key[1]"
        :letter="key[0]"
        :key="j"
      />
    </div>
  </div>
</template>
