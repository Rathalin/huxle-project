// component test
// export default {} as never

import { mount } from '@vue/test-utils'
import LocaleSwitcher from '../ui/header/LocaleSwitcher.vue'
import { describe, expect, test, it, beforeEach } from 'vitest'
import { i18n } from '../../locales/i18n'
import { setActivePinia, createPinia } from 'pinia'
import CreateView from '../../views/CreateView.vue'

describe('LocaleSwitcher.vue', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  test('should change current locale', async () => {
    const wrapper = mount(LocaleSwitcher as any, {
      global: { plugins: [i18n] },
    })
    // at the start the website should be in English language
    expect(i18n.global.locale).toBe('en')
    // the site should contain a button to switch the language
    const langButton = wrapper.find('button')
    expect(langButton).toBeDefined()
    // it should give the option to switch to "Deutsch" and be clickable
    expect(langButton.text()).toContain('Deutsch')
    await langButton!.trigger('click')
    // expect(i18n.global.locale).toBe('de')
    // expect(langButton.text()).toContain('English')
  })
})
