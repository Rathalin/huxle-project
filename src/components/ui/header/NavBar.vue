<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './NavButton.vue'
</script>

<template>
  <nav class="flex justify-center items-center flex-wrap gap-x-10">
    <RouterLink to="/create">
      <NavButton>
        <div class="hidden sm:flex">{{ $t('header.link.create.label') }}</div>
        <div class="flex sm:hidden" :title="$t('header.link.create.label')">
          {{ $t('header.link.create-short.label') }}
        </div>
      </NavButton>
    </RouterLink>
  </nav>
</template>
