<script setup lang="ts">
import Header from '@/components/ui/header/Header.vue'
import Main from '@/components/ui/main/Main.vue'
import Footer from '@/components/ui/footer/Footer.vue'
import { useLocaleStore } from './stores/locale.store'
import { computed } from 'vue'
import EasterEgg from './components/ui/easter-egg/EasterEgg.vue'

const localeStore = useLocaleStore()
const isGroguMode = computed(() => localeStore.selectedLocale === 'grogu')
</script>

<template>
  <Header :data-grogu="isGroguMode" />
  <Main :data-grogu="isGroguMode" />
  <Footer :data-grogu="isGroguMode" />
  <EasterEgg v-if="isGroguMode" />
</template>
