<script setup lang="ts"></script>

<template>
  <footer class="hidden sm:flex flex-col px-4 pb-1">
    <hr class="w-full border-graphite-600 border-solid pb-1" />
    <div class="flex">
      <div class="invisible w-3/12"></div>
      <div
        class="w-6/12 flex flex-col md:flex-row flex-wrap md:justify-center gap-x-4"
      >
        <span>{{ $t('footer.label') }}</span>
        <span class="hidden md:inline">|</span>
        <span>2022</span>
      </div>
      <div class="w-3/12 flex justify-end" title="*Quak*">
        <RouterLink to="/play/🦆">🦆</RouterLink>
      </div>
    </div>
  </footer>
</template>
