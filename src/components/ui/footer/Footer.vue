<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale.store'
import DebugButton from '../buttons/DebugButton.vue'

const { activateSecretGroguLocale } = useLocaleStore()
</script>

<template>
  <footer class="flex flex-col px-4 pb-1">
    <hr class="w-full border-solid border-graphite-500 pb-1" />
    <div class="flex items-center">
      <div class="flex w-1/2 items-center sm:w-3/12">
        <img
          id="grogu"
          class="cursor-pointer"
          @click="() => activateSecretGroguLocale()"
          src="@/assets/images/grogu-48.png"
          alt="grogu"
        />
      </div>
      <div
        class="hidden w-6/12 flex-col flex-wrap gap-x-4 sm:flex md:flex-row md:justify-center"
      >
        <span>{{ $t('footer.label') }}</span>
        <span class="hidden md:inline">|</span>
        <span>2022</span>
      </div>
      <div class="flex w-1/2 justify-end sm:w-3/12" title="*Quak*">
        <RouterLink to="/play/example-hash">
          <DebugButton>Show GameView</DebugButton>
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#grogu {
  height: 22px;
  filter: brightness(0.8);
}
</style>
