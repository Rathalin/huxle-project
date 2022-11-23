<script setup lang="ts">
import { ref } from '@vue/reactivity'
import IconButton from '@/components/ui/buttons/IconButton.vue'
import TextInput from '@/components/ui/form/TextInput.vue'
import SoftDialog from '../../dialogs/SoftDialog.vue'

const props = defineProps<{
  link: string
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const dialogEl = ref<InstanceType<typeof SoftDialog>>()
const showCopiedHint = ref(false)

function open(): void {
  dialogEl.value?.open()
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
  open,
})
</script>

<template>
  <SoftDialog ref="dialogEl" @close="onClose">
    <template v-slot:header
      ><h1 class="text-xl">{{ $t('view.create.dialog.heading.text') }}</h1>
    </template>
    <div
      class="flex gap-x-2"
      @click="onCopyClick"
      :title="$t('view.create.dialog.copy.title')"
    >
      <TextInput :input="{ value: link }" class="flex-1" readonly />
      <IconButton>
        <i class="material-icons">content_copy</i>
      </IconButton>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="text-success transition-opacity duration-300"
        :class="{ 'opacity-0': !showCopiedHint }"
      >
        {{ $t('view.create.dialog.copied.text') }}
      </div>
    </div>
  </SoftDialog>
</template>

<style scoped>
dialog::backdrop {
  backdrop-filter: blur(2px);
  background-color: rgba(200, 200, 200, 0.25);
}
</style>
