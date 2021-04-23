import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import AppHeader from '~/components/AppHeader.vue';

describe('AppHeader', () => {
  describe('toggleMenu', () => {
    test('should emit event', () => {
      const appHeader = new AppHeader();
      appHeader.$nuxt = {
        $emit: jest.fn()
      };
      appHeader.toggleMenu();
      expect(appHeader.$nuxt.$emit).toHaveBeenCalledWith('toggle-menu');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(AppHeader, { localVue });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
