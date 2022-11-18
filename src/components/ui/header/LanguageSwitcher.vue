<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale.store'
import { computed } from '@vue/reactivity'

const { $state, toggleLocale } = useLocaleStore()

const selectedLocaleUpper = computed(() => $state.selectedLocale.toUpperCase())

function onSwitchClick() {
  toggleLocale()
}
</script>

<template>
  <button @click="onSwitchClick">{{ selectedLocaleUpper }}</button>
</template>
