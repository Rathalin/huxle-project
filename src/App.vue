<script setup lang="ts">
import Header from '@/components/ui/header/Header.vue'
import Main from '@/components/ui/main/Main.vue'
import Footer from '@/components/ui/footer/Footer.vue'
import { useLocaleStore } from './stores/locale.store'
import { computed, onMounted, ref } from 'vue'
import SoftDialog from './components/ui/dialogs/SoftDialog.vue'
import EasterEgg from './components/ui/easter-egg/EasterEgg.vue'

const { $state } = useLocaleStore()
const isGroguMode = computed(() => $state.selectedLocale === 'grogu')

const dialogEl = ref<InstanceType<typeof SoftDialog>>()

onMounted(() => {
  if (import.meta.env.PROD) {
    dialogEl.value?.open()
  }
})
</script>

<template>
  <Header :data-grogu="isGroguMode" />
  <Main :data-grogu="isGroguMode" />
  <Footer :data-grogu="isGroguMode" />
  <SoftDialog ref="dialogEl">
    <template v-slot:header>
      <span>{{ $t('app.hint.development.heading.text') }}</span>
      <span>👋</span>
    </template>
    <div>{{ $t('app.hint.development.content.text') }}</div>
  </SoftDialog>
  <EasterEgg v-if="isGroguMode" />
</template>
