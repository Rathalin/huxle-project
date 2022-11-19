<script setup lang="ts">
import { ref } from '@vue/reactivity'

const props = defineProps<{
  label?: string
  input?: {
    id?: string
    name?: string
    value?: string
  }

  errors?: string[]
}>()

const emits = defineEmits<{
  change(newText: string): void
}>()

const inputText = ref(props.input?.value ?? '')

function onInputChange(e: Event) {
  emits.change((e.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <label :for="input?.id">{{ label }}</label>
    <input
      type="text"
      :id="input?.id"
      :name="input?.name"
      class="bg-graphite-600 w-full px-4 py-1 rounded-sm hover:outline outline-1 focus-visible:outline focus-visible:outline-prime-500"
      v-model="inputText"
      @change="onInputChange"
    />
    <div
      v-if="errors != null && errors.length > 0"
      class="flex flex-col text-sm text-error-normal"
    >
      <div v-for="error of errors">{{ error }}</div>
    </div>
  </div>
</template>
