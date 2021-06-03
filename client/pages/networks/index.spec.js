import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Networks from './index.vue';

describe('Networks', () => {
  describe('fetch', () => {
    test('should return networks', async (done) => {
      const networkData = [
        {
          id: 1,
          name: 'GozrehblasterN',
          description: 'Test Wifi',
          type: 'WIFI'
        },
        {
          id: 2,
          name: 'HerzogHomeN',
          description: 'Test Wifi',
          type: 'WIFI'
        },
        {
          id: 3,
          name: 'Wired',
          description: 'Wired devices',
          type: 'Wired'
        }
      ];
      const page = new Networks();
      const mockContext = {
        $axios: {
          $get: jest.fn().mockReturnValue(networkData)
        }
      };
      const data = await page.$options.fetch.bind(mockContext)();
      expect(mockContext.$axios.$get).toHaveBeenCalledWith('/networks');
      expect(data).toEqual(networkData);
      done();
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('is a Vue instance', () => {
      const wrapper = shallowMount(Networks, { localVue });
      const title = wrapper.find('[data-network-title]');
      expect(title.text()).toEqual('Networks');
      const list = wrapper.find('[data-network-list]');
      expect(list).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
