<script setup lang="ts">
import Header from '@/components/ui/header/Header.vue'
import Main from '@/components/ui/main/Main.vue'
import Footer from '@/components/ui/footer/Footer.vue'
import { useLocaleStore } from './stores/locale.store'
import { computed, onMounted, ref } from 'vue'
import BasicDialog from './components/ui/dialogs/BasicDialog.vue'
import EasterEgg from './components/ui/easter-egg/EasterEgg.vue'

const localeStore = useLocaleStore()
const isGroguMode = computed(() => localeStore.selectedLocale === 'grogu')

const dialogEl = ref<InstanceType<typeof BasicDialog>>()

onMounted(() => {
  if (import.meta.env.PROD) {
    dialogEl.value?.openDialog()
  }
})
</script>

<template>
  <Header :data-grogu="isGroguMode" />
  <Main :data-grogu="isGroguMode" />
  <Footer :data-grogu="isGroguMode" />
  <BasicDialog ref="dialogEl">
    <template v-slot:header>
      <span>{{ $t('app.hint.development.heading.text') }}</span>
      <span>👋</span>
    </template>
    <div>{{ $t('app.hint.development.content.text') }}</div>
  </BasicDialog>
  <EasterEgg v-if="isGroguMode" />
</template>
