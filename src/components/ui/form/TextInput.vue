<script setup lang="ts">
defineProps<{
  modelValue: string
  id?: string
  name?: string
  label?: string
  readonly?: boolean
  errors?: string[]
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', newText: string): void
}>()

function onInputChange(e: Event) {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :name="name"
      class="w-full rounded-sm bg-neutral-300 px-3 py-2 leading-tight outline-1 hover:outline focus-visible:outline focus-visible:outline-amber-600 dark:bg-graphite-500 dark:focus-visible:outline-amber-600"
      :value="modelValue"
      @input="onInputChange"
      :readonly="readonly === true"
    />
    <div
      v-if="errors != null && errors.length > 0"
      class="flex flex-col text-sm text-light-error dark:text-dark-error"
    >
      <div v-for="error of errors" :key="error">{{ error }}</div>
    </div>
  </div>
</template>
