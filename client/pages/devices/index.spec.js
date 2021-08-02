import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Buefy from 'buefy';
import Devices from './index.vue';

describe('Devices', () => {
  describe('fetch', () => {
    test('should return networks', async (done) => {
      const page = new Devices();
      const mockContext = {
        list: jest.fn()
      };
      await page.$options.fetch.bind(mockContext)();
      expect(mockContext.list).toHaveBeenCalled();
      done();
    });
  });

  describe('template', () => {
    let localVue;
    let localStore;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
      localVue.use(Vuex);
      localStore = new Vuex.Store({
        modules: {
          device: {
            namespaced: true,
            state: {
              _devices: []
            }
          }
        }
      });
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Devices, {
        localVue,
        mocks: { $store: localStore }
      });
      const title = wrapper.find('[data-device-title]');
      expect(title.text()).toEqual('Devices');
      const list = wrapper.find('[data-device-list]');
      expect(list).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
