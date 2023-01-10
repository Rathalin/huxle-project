<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '@/components/ui/buttons/IconButton.vue'
import BasicDialog from '../../dialogs/BasicDialog.vue'
import TextDisplay from '../../form/TextDisplay.vue'

const props = defineProps<{
  link: string
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const dialogEl = ref<InstanceType<typeof BasicDialog>>()
const showCopiedHint = ref(false)

function openDialog() {
  dialogEl.value?.openDialog()
}

function closeDialog() {
  dialogEl.value?.closeDialog()
}

function onClose() {
  showCopiedHint.value = false
  emits('close')
}

function onCopyClick(_e: Event) {
  navigator.clipboard.writeText(props.link)
  showCopiedHint.value = true
}

defineExpose({
  openDialog,
  closeDialog,
})
</script>

<template>
  <BasicDialog ref="dialogEl" @close="onClose">
    <template v-slot:header
      ><h1 class="text-xl">{{ $t('view.create.dialog.heading.text') }}</h1>
    </template>
    <div
      class="flex gap-x-2"
      @click="onCopyClick"
      :title="$t('view.create.dialog.copy.title')"
    >
      <TextDisplay :value="link" class="grow" />
      <IconButton>
        <i class="material-icons">content_copy</i>
      </IconButton>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="text-light-success transition-opacity duration-300 dark:text-dark-success"
        :class="{ 'opacity-0': !showCopiedHint }"
      >
        {{ $t('view.create.dialog.copied.text') }}
      </div>
    </div>
  </BasicDialog>
</template>
