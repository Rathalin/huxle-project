import { mount  } from '@vue/test-utils'
import CreateView from '../../views/CreateView.vue'
import { describe, expect, test, it, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'


describe('CreateView.vue', () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

    test('should mount', async () => {
    const wrapper = mount(CreateView as any);
    });
  });