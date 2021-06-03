import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import Devices from './index.vue';

describe('Devices', () => {
  describe('fetch', () => {
    test('should return networks', async (done) => {
      const deviceData = [
        {
          id: 1,
          name: 'Pixel2XL-Dave-Mask',
          description: 'Daves Android phone',
          os: 'Android'
        },
        {
          id: 2,
          name: 'Chromecast-Family',
          description: 'Family Room Chromecast Ultra',
          os: 'Chromecast'
        },
        {
          id: 3,
          name: 'Mackbook-Dave',
          description: 'Daves 13" Macbook Pro',
          os: 'Mac'
        }
      ];
      const page = new Devices();
      const mockContext = {
        $axios: {
          $get: jest.fn().mockReturnValue(deviceData)
        }
      };
      const data = await page.$options.fetch.bind(mockContext)();
      expect(mockContext.$axios.$get).toHaveBeenCalledWith('/devices');
      expect(data).toEqual(deviceData);
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
      const wrapper = shallowMount(Devices, { localVue });
      const title = wrapper.find('[data-device-title]');
      expect(title.text()).toEqual('Devices');
      const list = wrapper.find('[data-device-list]');
      expect(list).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
