import { mount  } from '@vue/test-utils'
import CreateView from '../../views/CreateView.vue'
import { describe, expect, test, it, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { i18n } from '../../locales/i18n';


describe('CreateView.vue', () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

    test('the entered words are being checked for correctness', async () => {
    const wrapper = mount(CreateView as any,  { global: { plugins: [i18n] } });
    // the page should have two input fields
    const inputFields = await wrapper.findAll('input')
    const engInput = inputFields[0]
    const deInput = inputFields[1]
    // after setting a value the input field should contain this
    engInput.setValue('hell')
    expect(engInput.element.value).toBe('hell')
    await wrapper.find('button').trigger('click')
    //after entering a wrong value an error should appear
    const errorField = await wrapper.find('.text-light-error').text()
    expect(errorField).toBe('The word must have 5 letters.')
    // when entering a word the length is important
    deInput.setValue('water')
    expect(deInput.element.value).toHaveLength(5)
    });
  });