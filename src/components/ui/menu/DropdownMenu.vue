<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useLocaleStore } from '@/stores/locale.store'
import { localeOptions, type LocaleOption } from '@/locales/i18n'
import DropdownItem from './DropdownItem.vue'

const { $state, setLocale } = useLocaleStore()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

async function onMenuBlur(event: FocusEvent) {
  if (event.currentTarget == null) return
  const currentTarget = event.currentTarget as HTMLElement
  // Give browser time to focus the next element
  requestAnimationFrame(() => {
    // Check if the new focused element is a child of the original container
    if (!currentTarget.contains(document.activeElement)) {
      closeMenu()
    }
  })
}

watchEffect(() => console.log(menuOpen.value))

function onLocaleChange(localeOption: LocaleOption) {
  // if (localeValue === 'grogu') return
  setLocale(localeOption)
}
</script>

<template>
  <div
    class="z-10 cursor-pointer"
    tabindex="0"
    @keydown.enter.self="toggleMenu"
    @blur="onMenuBlur"
  >
    <div @click="toggleMenu">{{ $state.selectedLocale }}</div>
    <menu v-if="menuOpen" class="menu card no-hover flex-col">
      <DropdownItem
        v-for="localeOption in localeOptions"
        @select="() => onLocaleChange(localeOption)"
      >
        <span>{{ $t('header.locale.' + localeOption) }}</span>
      </DropdownItem>
    </menu>
  </div>
</template>
