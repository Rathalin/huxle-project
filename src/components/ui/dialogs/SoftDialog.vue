<script setup lang="ts">
import { ref } from '@vue/reactivity'
import IconButton from '@/components/ui/buttons/IconButton.vue'

withDefaults(
  defineProps<{
    closable?: boolean
  }>(),
  {
    closable: true,
  }
)

const emits = defineEmits<{
  (e: 'close'): void
}>()

const dialogEl = ref<HTMLDialogElement>()

function open(): void {
  dialogEl.value?.showModal()
}

function onCloseClick(_e: Event) {
  dialogEl.value?.close()
  emits('close')
}

defineExpose({
  open,
})
</script>

<template>
  <dialog
    ref="dialogEl"
    class="bg-transparent w-full p-0 md:w-2/3 lg:w-1/2 2xl:w-1/3 backdrop:backdrop-blur-sm backdrop:bg-dialog-backdrop"
  >
    <form
      class="rounded-sm bg-graphite-700 p-8 flex flex-col gap-y-2 text-gray-200"
      method="dialog"
    >
      <div class="flex justify-between">
        <h1 class="text-xl">
          <slot name="header"></slot>
        </h1>
        <IconButton v-if="closable" @click="onCloseClick">
          <i class="material-icons">close</i>
        </IconButton>
      </div>
      <slot></slot>
    </form>
  </dialog>
</template>
