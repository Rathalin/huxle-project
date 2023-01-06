import { mount  } from '@vue/test-utils'
import GameView from '../../views/GameView.vue'
import { describe, expect, test, it, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { i18n } from '../../locales/i18n';

vi.mock('vue-router'); // mock the import


describe('GameView.vue', () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

    test('the entered words are being checked for correctness', async () => {
    const wrapper = mount(GameView as any,  { global: { plugins: [i18n] } });
    });
  });