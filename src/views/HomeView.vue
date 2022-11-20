<script setup lang="ts">
import SecondaryButton from '@/components/ui/buttons/SecondaryButton.vue'
import Letter from '@/components/ui/main/game/board/Letter.vue'
</script>

<template>
  <article class="mt-10 flex flex-col items-center">
    <div>
      <h1 class="text-2xl flex flex-col items-center">
        <span aria-hidden="true">{{ $t('view.home.heading.text') }}</span>
        <span class="hidden" aria-hidden="false">{{
          $t('view.home.heading.aria-text')
        }}</span>
      </h1>
      <div class="mt-2 mb-10 flex flex-row gap-1" aria-hidden="true">
        <Letter class="motion-safe:animate-wiggle" letter="h" state="present" />
        <Letter letter="u" state="absent" />
        <Letter letter="x" state="absent" />
        <Letter class="motion-safe:animate-wiggle" letter="l" state="present" />
        <Letter
          class="motion-safe:animate-wiggle-fast"
          letter="e"
          state="correct"
        />
      </div>
    </div>
    <div class="inline">
      <span class="pr-2">
        <RouterLink to="/create">
          <SecondaryButton>{{ $t('view.home.create') }}</SecondaryButton>
        </RouterLink>
      </span>
      <span>{{ $t('view.home.receive') }}</span>
    </div>
  </article>
</template>
