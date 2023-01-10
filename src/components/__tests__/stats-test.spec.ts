import { mount  } from '@vue/test-utils'
import WinnerDialog from '../ui/main/game/board/dialogs/WinnerDialog.vue'
import { describe, expect, test, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { i18n } from '../../locales/i18n';


describe('WinnerDialog.vue', () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

    test('dialog has the correct data', async () => {
    const wrapper = mount(WinnerDialog as any,  { global: { plugins: [i18n] } });
    await wrapper.setProps({ guesses: 2})
    // is detecting props correctly
    expect(wrapper.vm.guesses).toBe(2)
    // the correct message should be displayed
    const message = wrapper.find('#message')
    expect(message.text()).toContain('Genius!')
    // an extremly high number will lead to the default note as a message
    await wrapper.setProps({ guesses: 120})
    expect(message.text()).toContain('Well, you got it and that\'s all that matters, right?')
    });
  });