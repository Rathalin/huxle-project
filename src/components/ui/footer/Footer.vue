<script setup lang="ts">
import NavButton from '../header/NavButton.vue'
</script>

<template>
  <footer class="flex flex-col px-4 pb-1">
    <hr class="w-full border-graphite-600 border-solid pb-1" />
    <div class="flex flex-row">
      <div class="invisible w-3/12"></div>
      <div class="w-6/12 flex flex-row flex-wrap justify-center gap-x-4">
        <span>{{ $t('footer.label') }}</span>
        <span>|</span>
        <span>2022</span>
      </div>
      <div class="w-3/12 flex justify-end">
        <RouterLink to="/play/🦆">🦆</RouterLink>
      </div>
    </div>
  </footer>
</template>
