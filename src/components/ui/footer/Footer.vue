<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale.store'

const { activateSecretGroguLocale } = useLocaleStore()
</script>

<template>
  <footer class="flex flex-col px-4 pb-1">
    <hr class="w-full border-graphite-600 border-solid pb-1" />
    <div class="flex">
      <div class="w-3/12 flex items-center">
        <img
          id="grogu"
          class="cursor-pointer"
          @click="() => activateSecretGroguLocale()"
          src="@/assets/images/grogu-48.png"
          alt="grogu"
        />
      </div>
      <div
        class="w-6/12 hidden sm:flex flex-col md:flex-row flex-wrap md:justify-center gap-x-4"
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

<style scoped>
#grogu {
  height: 26px;
  filter: brightness(0.8);
}
</style>
