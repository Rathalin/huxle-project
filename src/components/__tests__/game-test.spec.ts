import { mount  } from '@vue/test-utils'
import GameView from '../../views/GameView.vue'
import HomeView from '../../views/HomeView.vue'
import { describe, expect, test, it, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { i18n } from '../../locales/i18n';
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../../router/router"

describe('Home.vue', () => {

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
      })

    it('on the Home Page it should be possible to go to Create page', async () => {
      const wrapper = mount(HomeView as any,  { global: { plugins: [i18n] } });
      // in the home view there should be a button to create your own Huxle
      const createButton = wrapper.find('#create')
      expect(createButton).toBeDefined()
      expect(createButton.text()).toContain('Create your own Huxle')
      await createButton!.trigger('click')
    });

    it('should mount GameView', async () => {
      // creating a Router for testing
      const router = createRouter({
        history: createWebHistory(),
        routes: routes,
        
      })
      router.push({ params: {wordEN: 'aGVsbG8=', wordDE: 'aGFsbG8='}})
      await router.isReady()
      const wrapper = mount(GameView as any,  { global: { plugins: [i18n, router] } });
      // const createButton = wrapper.find('button')
      // expect(createButton.text()).toContain('Enter')
    });

  });