<script setup lang="ts">
import Header from '@/components/ui/header/Header.vue'
import Main from '@/components/ui/main/Main.vue'
import Footer from '@/components/ui/footer/Footer.vue'
import { useLocaleStore } from './stores/locale.store'
import { computed } from '@vue/reactivity'

const { $state } = useLocaleStore()
const activateGroguMode = computed(() => $state.selectedLocale === 'grogu')
</script>

<template>
  <Header :data-grogu="activateGroguMode" />
  <Main :data-grogu="activateGroguMode" />
  <Footer :data-grogu="activateGroguMode" />
</template>
