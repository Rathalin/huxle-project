<script setup lang="ts">
import TextInput from '@/components/ui/form/TextInput.vue'
import LogoText from '@/components/ui/logo/LogoText.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import LinkDialog from '@/components/ui/main/create/LinkDialog.vue'
import { ref } from '@vue/reactivity'

const linkDialogEl = ref()

function openDialog() {
  linkDialogEl.value.open()
}
</script>

<template>
  <article>
    <h1 class="text-lg my-4">
      <span class="pr-1">{{ $t('view.create.heading.text') }}</span>
      <LogoText class="text-xl" />
      <span>.</span>
    </h1>

    <TextInput
      :label="$t('view.create.input.en.label')"
      class="mb-2"
      :errors="[
        $t('view.create.input.error.required'),
        $t('view.create.input.error.length', { length: 5 }),
      ]"
    />
    <TextInput :label="$t('view.create.input.de.label')" class="mb-2" />

    <PrimaryButton @click="openDialog" class="px-6 mt-4">{{
      $t('view.create.submit.label')
    }}</PrimaryButton>

    <LinkDialog link="https://localhost:5173/play/asdf123" ref="linkDialogEl" />
  </article>
</template>
