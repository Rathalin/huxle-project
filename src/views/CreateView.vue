<script setup lang="ts">
import TextInput from '@/components/ui/form/TextInput.vue'
import LogoText from '@/components/ui/logo/LogoText.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import LinkDialog from '@/components/ui/main/create/LinkDialog.vue'
import { computed, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const HOST_URL = import.meta.env.VITE_HOST_URL ?? 'http://127.0.0.1:5173/'

const linkDialogEl = ref<InstanceType<typeof LinkDialog>>()

const formState = reactive({
  wordEN: '',
  wordDE: '',
})

const route = useRoute()

// the words will be encoded using Base64
const createdLink = computed(() => {
  return `${HOST_URL}play/${btoa(formState.wordEN)}/${btoa(formState.wordDE)}`
})

const validate = ref(false)

function openDialog() {
  validate.value = true
  if (formState.wordEN.length == 5 && formState.wordDE.length == 5) {
    linkDialogEl.value?.openDialog()
  }
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
      :errors="
        formState.wordEN.length == 5 || !validate
          ? []
          : [
              formState.wordEN.length == 0
                ? $t('view.create.input.error.required')
                : $t('view.create.input.error.length', { length: 5 }),
            ]
      "
    />
    <TextInput
      :label="$t('view.create.input.de.label')"
      class="mb-2"
      v-model="formState.wordDE"
      :errors="
        formState.wordDE.length == 5 || !validate
          ? []
          : [
              formState.wordDE.length == 0
                ? $t('view.create.input.error.required')
                : $t('view.create.input.error.length', { length: 5 }),
            ]
      "
    />

    <PrimaryButton @click="openDialog" class="mt-4 px-7">{{
      $t('view.create.submit.label')
    }}</PrimaryButton>

    <LinkDialog :link="createdLink" ref="linkDialogEl" />
  </article>
</template>
