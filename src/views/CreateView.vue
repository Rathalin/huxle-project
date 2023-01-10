<script setup lang="ts">
import TextInput from '@/components/ui/form/TextInput.vue'
import LogoText from '@/components/ui/logo/LogoText.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import LinkDialog from '@/components/ui/main/create/LinkDialog.vue'
import { computed, ref, reactive } from 'vue'
import { i18n } from '@/locales/i18n'

const HOST_URL = import.meta.env.VITE_HOST_URL ?? 'http://127.0.0.1:5173/'

const linkDialogEl = ref<InstanceType<typeof LinkDialog>>()

const formState = reactive({
  wordEN: '',
  wordDE: '',
})

// the words will be encoded using Base64
const createdLink = computed(() => {
  return `${HOST_URL}play/${btoa(formState.wordEN)}/${btoa(formState.wordDE)}`
})

const validate = ref(false)

function openDialog() {
  validate.value = true
  if (
    verifyWord(formState.wordEN).length === 0 &&
    verifyWord(formState.wordDE).length === 0
  ) {
    linkDialogEl.value?.openDialog()
  }
}

function verifyWord(word: string) {
  let errors: string[]
  errors = []

  if (word.length == 0) {
    errors.push(i18n.global.t('view.create.input.error.required'))
  } else if (word.length !== 5) {
    errors.push(i18n.global.t('view.create.input.error.length', { length: 5 }))
  }

  if (!/^[a-zA-Z]+$/.test(word)) {
    errors.push(i18n.global.t('view.create.input.error.onlyLetters'))
  }

  return errors
}
</script>

<template>
  <article>
    <h1 class="my-4 text-lg">
      <span class="pr-1">{{ $t('view.create.heading.text') }}</span>
      <LogoText class="text-xl" />
      <span>.</span>
    </h1>

    <TextInput
      :label="$t('view.create.input.en.label')"
      class="mb-2"
      v-model="formState.wordEN"
      :errors="!validate ? [] : verifyWord(formState.wordEN)"
    />
    <TextInput
      :label="$t('view.create.input.de.label')"
      class="mb-2"
      v-model="formState.wordDE"
      :errors="!validate ? [] : verifyWord(formState.wordDE)"
    />

    <PrimaryButton @click="openDialog" class="mt-4 px-7">{{
      $t('view.create.submit.label')
    }}</PrimaryButton>

    <LinkDialog :link="createdLink" ref="linkDialogEl" />
  </article>
</template>
