<script setup lang="ts">
import { ref } from '@vue/reactivity'

const props = defineProps<{
  label?: string
  input?: {
    id?: string
    name?: string
    value?: string
  }
  readonly?: boolean
  errors?: string[]
}>()

const emits = defineEmits<{
  (e: 'change', newText: string): void
}>()

const inputText = ref(props.input?.value ?? '')

function onInputChange(e: Event) {
  emits('change', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <label :for="input?.id">{{ label }}</label>
    <input
      type="text"
      :id="input?.id"
      :name="input?.name"
      class="w-full rounded-sm bg-neutral-300 px-3 py-2 leading-tight outline-1 hover:outline focus-visible:outline focus-visible:outline-amber-600 dark:bg-graphite-500 dark:focus-visible:outline-amber-600"
      v-model="inputText"
      @change="onInputChange"
      :readonly="readonly === true"
    />
    <div
      v-if="errors != null && errors.length > 0"
      class="flex flex-col text-sm text-light-error dark:text-dark-error"
    >
      <div v-for="error of errors">{{ error }}</div>
    </div>
  </div>
</template>
