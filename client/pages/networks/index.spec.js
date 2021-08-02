import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Buefy from 'buefy';
import Networks from './index.vue';

describe('Networks', () => {
  describe('fetch', () => {
    test('should return networks', async (done) => {
      const page = new Networks();
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
          network: {
            namespaced: true,
            state: {
              _networks: []
            }
          }
        }
      });
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Networks, {
        localVue,
        mocks: { $store: localStore }
      });
      const title = wrapper.find('[data-network-title]');
      expect(title.text()).toEqual('Networks');
      const list = wrapper.find('[data-network-list]');
      expect(list).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
