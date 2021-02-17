import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import AppMenu from '~/components/AppMenu.vue';

describe('AppMenu', () => {
  describe('close', () => {
    test('should emit event', () => {
      const appMenu = new AppMenu();
      appMenu.$nuxt = {
        $emit: jest.fn()
      };
      appMenu.close();
      expect(appMenu.$nuxt.$emit).toHaveBeenCalledWith('close-menu');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(AppMenu, { localVue });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
