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
      const networks = new Networks();
      networks.$axios = {
        $get: jest.fn().mockReturnValue(networkData)
      };
      const data = await networks.fetch();
      expect(networks.$axios.$get).toHaveBeenCalledWith('/networks');
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
      expect(wrapper.vm).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
