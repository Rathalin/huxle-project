<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useLocaleStore } from '@/stores/locale.store'
import { localeOptions, type LocaleOption } from '@/locales/i18n'

const { $state, setLocale } = useLocaleStore()

function onLocaleChange(e: Event) {
  const localeValue = (e.currentTarget as HTMLSelectElement)
    .value as LocaleOption
  // if (localeValue === 'grogu') return
  setLocale(localeValue)
}
</script>

<template>
  <div>
    <div class="flex items-center rounded-sm bg-graphite-500 px-2">
      <i class="material-icons">language</i>
      <select
        name="locale"
        class="bg-graphite-500 focus-visible:outline-none"
        :value="$state.selectedLocale"
        @change="onLocaleChange"
      >
        <option
          v-for="localeOption of localeOptions"
          :value="localeOption"
          class="rounded-sm"
          :selected="localeOption === $state.selectedLocale"
        >
          <span class="hidden sm:inline">{{
            $t('header.locale.' + localeOption)
          }}</span>
        </option>
        <option hidden value="grogu">{{ $t('header.locale.grogu') }}</option>
      </select>
    </div>
  </div>
</template>
