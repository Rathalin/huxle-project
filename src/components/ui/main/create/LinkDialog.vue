<script setup lang="ts">
import { ref } from '@vue/reactivity'
import IconButton from '@/components/ui/buttons/IconButton.vue'
import TextInput from '@/components/ui/form/TextInput.vue'

const props = defineProps<{
  link: string
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const dialogEl = ref<HTMLDialogElement | null>(null)
const showCopiedHint = ref(false)

function open(): void {
  dialogEl.value?.showModal()
}

function onCloseClick(_e: Event) {
  dialogEl.value?.close()
  showCopiedHint.value = false
  emits('close')
}

function onCopyClick(_e: Event) {
  navigator.clipboard.writeText(props.link)
  showCopiedHint.value = true
}

defineExpose({
  open,
})
</script>

<template>
  <dialog ref="dialogEl" class="bg-transparent w-full md:w-2/3 lg:w-1/2">
    <!-- backdrop:bg-white backdrop:opacity-25 backdrop:backdrop-blur-sm -->
    <form
      class="rounded-sm bg-graphite-700 p-4 flex flex-col gap-y-2 text-gray-200"
      method="dialog"
    >
      <div class="flex justify-between">
        <h1 class="text-xl">Link to share:</h1>
        <IconButton @click="onCloseClick">
          <i class="material-icons">close</i>
        </IconButton>
      </div>
      <div class="flex gap-x-2" @click="onCopyClick">
        <TextInput :input="{ value: link }" class="flex-1" readonly />
        <IconButton>
          <i class="material-icons">content_copy</i>
        </IconButton>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="text-green-400 transition-opacity duration-300"
          :class="{ 'opacity-0': !showCopiedHint }"
        >
          Copied!
        </div>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
dialog::backdrop {
  backdrop-filter: blur(2px);
  background-color: rgba(200, 200, 200, 0.25);
}
</style>
