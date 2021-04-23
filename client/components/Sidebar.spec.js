import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Sidebar from '~/components/Sidebar.vue';

describe('Sidebar', () => {
  describe('mounted', () => {
    test('should listen for menu events', () => {
      const sidebar = new Sidebar();
      const mockContext = {
        $nuxt: {
          $on: jest.fn()
        },
        toggleMenu: jest.fn(),
        close: jest.fn()
      };
      sidebar.$options.mounted[0].bind(mockContext)();
      expect(mockContext.$nuxt.$on).toHaveBeenCalledWith(
        'toggle-menu',
        mockContext.toggleOpen
      );
      expect(mockContext.$nuxt.$on).toHaveBeenCalledWith(
        'close-menu',
        mockContext.close
      );
    });
  });

  describe('toggleOpen', () => {
    test('should toggle menu on', () => {
      const sidebar = new Sidebar();
      sidebar.open = false;
      sidebar.toggleOpen();
      expect(sidebar.open).toBeTruthy();
    });

    test('should toggle menu off', () => {
      const sidebar = new Sidebar();
      sidebar.open = true;
      sidebar.toggleOpen();
      expect(sidebar.open).toBeFalsy();
    });
  });

  describe('close', () => {
    test('should toggle menu off', () => {
      const sidebar = new Sidebar();
      sidebar.open = true;
      sidebar.close();
      expect(sidebar.open).toBeFalsy();
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Sidebar, {
        localVue,
        mocks: {
          // used to add properties to the rendering context
          $nuxt: {
            $on: jest.fn()
          }
        }
      });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
