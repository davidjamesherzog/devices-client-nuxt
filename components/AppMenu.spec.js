import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import AppMenu from '~/components/AppMenu.vue';
import Card from '~/components/Card';

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

    test('should render home link', () => {
      const wrapper = shallowMount(AppMenu, {
        localVue
      });
      const title = wrapper.find('[data-menu="Home"]');
      expect(title.exists()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render devices link', () => {
      const wrapper = shallowMount(AppMenu, {
        localVue
      });
      const title = wrapper.find('[data-menu="Devices"]');
      expect(title.exists()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render networks link', () => {
      const wrapper = shallowMount(AppMenu, {
        localVue
      });
      const title = wrapper.find('[data-menu="Networks"]');
      expect(title.exists()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
