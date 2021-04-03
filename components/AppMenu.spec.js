import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import AppMenu from '~/components/AppMenu.vue';

describe('AppMenu', () => {
  describe('isCurrentRoute', () => {
    test('should return true', () => {
      const appMenu = new AppMenu();
      appMenu.$route = {
        name: 'index'
      };
      const route = {
        name: 'index'
      };
      appMenu.isCurrentRoute(route);
      expect(appMenu.isCurrentRoute(route)).toBeTruthy();
    });

    test('should return true', () => {
      const appMenu = new AppMenu();
      appMenu.$route = {
        name: 'index'
      };
      const route = {
        name: 'devices'
      };
      appMenu.isCurrentRoute(route);
      expect(appMenu.isCurrentRoute(route)).toBeFalsy();
    });
  });

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
      const $route = {
        name: 'index'
      };
      const wrapper = shallowMount(AppMenu, {
        localVue,
        mocks: {
          $route
        }
      });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render home link', () => {
      const $route = {
        name: 'index'
      };
      const wrapper = shallowMount(AppMenu, {
        localVue,
        mocks: {
          $route
        }
      });
      const title = wrapper.find('[data-menu="Home"]');
      expect(title.exists()).toBeTruthy();
      expect(title.classes()).toContain('has-text-weight-bold');
      expect(wrapper).toMatchSnapshot();
    });

    test('should render devices link', () => {
      const $route = {
        name: 'devices'
      };
      const wrapper = shallowMount(AppMenu, {
        localVue,
        mocks: {
          $route
        }
      });
      const title = wrapper.find('[data-menu="Devices"]');
      expect(title.exists()).toBeTruthy();
      expect(title.classes()).toContain('has-text-weight-bold');
      expect(wrapper).toMatchSnapshot();
    });

    test('should render networks link', () => {
      const $route = {
        name: 'networks'
      };
      const wrapper = shallowMount(AppMenu, {
        localVue,
        mocks: {
          $route
        }
      });
      const title = wrapper.find('[data-menu="Networks"]');
      expect(title.exists()).toBeTruthy();
      expect(title.classes()).toContain('has-text-weight-bold');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
