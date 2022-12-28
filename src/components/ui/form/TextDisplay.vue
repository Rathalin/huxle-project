<script setup lang="ts">
defineProps<{
  id?: string
  name?: string
  value?: string
  label?: string
}>()
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :name="name"
      class="w-full rounded-sm bg-neutral-300 px-3 py-2 leading-tight outline-1 hover:outline focus-visible:outline focus-visible:outline-amber-600 dark:bg-graphite-500 dark:focus-visible:outline-amber-600"
      :value="value"
      :readonly="true"
    />
  </div>
</template>
