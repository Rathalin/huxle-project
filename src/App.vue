<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/ui/header/Header.vue'
import Footer from '@/components/ui/footer/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
