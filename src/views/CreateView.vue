<script setup lang="ts">
import TextInput from '@/components/ui/form/TextInput.vue'
import LogoText from '@/components/ui/logo/LogoText.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import LinkDialog from '@/components/ui/main/create/LinkDialog.vue'
import { ref } from '@vue/reactivity'
import { computed, reactive, watch } from 'vue'

const HOST_URL = import.meta.env.VITE_HOST_URL ?? 'http://127.0.0.1:5173/'

const linkDialogEl = ref<InstanceType<typeof LinkDialog>>()

const formState = reactive({
  wordEN: "",
  wordDE: "",
});

const createdLink = computed(() => {
  return `${HOST_URL}play?wordEN=${formState.wordEN}&wordDE=${formState.wordDE}` // toDo encode
});

const validate = ref(false)

function openDialog() {
  validate.value = true;
  if (formState.wordEN.length == 5 && formState.wordDE.length == 5){
    
    linkDialogEl.value?.openDialog()
  }
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
      @change="en => (formState.wordEN = en)"
      :errors="formState.wordEN.length == 5 || !validate ? [] :[
        formState.wordEN.length == 0 ? $t('view.create.input.error.required') :
        $t('view.create.input.error.length', { length: 5 }),
      ]"
    />
    <TextInput :label="$t('view.create.input.de.label')" class="mb-2" 
    @change="de => (formState.wordDE = de)"
    :errors="formState.wordDE.length == 5 || !validate ? [] :[
        formState.wordDE.length == 0 ? $t('view.create.input.error.required') :
        $t('view.create.input.error.length', { length: 5 }),
      ]"/>

    <PrimaryButton @click="openDialog" class="px-7 mt-4">{{
      $t('view.create.submit.label')
    }}</PrimaryButton>

    <!-- <pre>{{ formState }}</pre> -->

    <LinkDialog :link="createdLink" ref="linkDialogEl" />
  </article>
</template>
