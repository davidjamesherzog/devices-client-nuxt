import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils';
import Buefy from 'buefy';
import Breadcrumb from '~/components/Breadcrumb.vue';

describe('Breadcrumb', () => {
  describe('created', () => {
    test('should call updateBreadcrumbs', () => {
      const breadcrumb = new Breadcrumb();
      const mockContext = {
        updateBreadcrumbs: jest.fn()
      };
      breadcrumb.$options.created[0].bind(mockContext)();
      expect(mockContext.updateBreadcrumbs).toHaveBeenCalled();
    });
  });

  describe('onRouteChange', () => {
    test('should call updateBreadcrumbs', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.updateBreadcrumbs = jest.fn();
      breadcrumb.onRouteChange();
      expect(breadcrumb.updateBreadcrumbs).toHaveBeenCalled();
    });
  });

  describe('updateBreadcrumbs', () => {
    test('should set empty paths when no $route', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.updateBreadcrumbs();
      expect(breadcrumb.paths).toEqual([]);
    });

    test('should set empty paths when no $route.path', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.$route = {};
      breadcrumb.updateBreadcrumbs();
      expect(breadcrumb.paths).toEqual([]);
    });

    test('should set empty paths when $route.path = /', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.$route = {
        path: '/'
      };
      breadcrumb.updateBreadcrumbs();
      expect(breadcrumb.paths).toEqual([]);
    });

    test('should set paths', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.$route = {
        path: 'devices/1'
      };
      breadcrumb.updateBreadcrumbs();
      expect(breadcrumb.paths).toEqual(['devices', '1']);
    });

    test('should set paths with preceding /', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.$route = {
        path: '/devices/1'
      };
      breadcrumb.updateBreadcrumbs();
      expect(breadcrumb.paths).toEqual(['devices', '1']);
    });
  });

  describe('constructUrl', () => {
    test('should construct URL', () => {
      const breadcrumb = new Breadcrumb();
      breadcrumb.paths = ['devices', '1'];
      const url = breadcrumb.constructUrl('1');
      expect(url).toEqual('/devices/1');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Breadcrumb, {
        localVue,
        stubs: {
          NuxtLink: RouterLinkStub
        }
      });
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });

    test('should render home breadcrumb', () => {
      const $route = {
        path: ''
      };
      const wrapper = shallowMount(Breadcrumb, {
        localVue,
        mocks: {
          $route
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      });
      const breadcrumb = wrapper.find('[data-breadcrumb="home"]');
      expect(breadcrumb.exists()).toBeTruthy();
      expect(breadcrumb.text()).toEqual('home');
      expect(wrapper).toMatchSnapshot();
    });

    test('should render networks breadcrumb', () => {
      const $route = {
        path: 'networks'
      };
      const wrapper = shallowMount(Breadcrumb, {
        localVue,
        mocks: {
          $route
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      });
      const breadcrumb = wrapper.find('[data-breadcrumb="networks"]');
      expect(breadcrumb.exists()).toBeTruthy();
      expect(breadcrumb.text()).toEqual('networks');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
