import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import NetworkCard from '~/components/NetworkCard.vue';

describe('NetworkCard', () => {
  describe('type', () => {
    test('should return wifi', () => {
      const networkCard = new NetworkCard();
      networkCard.network = {
        type: 'WIFI'
      };
      expect(networkCard.type).toEqual('wifi');
    });

    test('should return ethernet-cable', () => {
      const networkCard = new NetworkCard();
      networkCard.network = {
        type: 'ETHERNET'
      };
      expect(networkCard.type).toEqual('ethernet-cable');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('should render network card', () => {
      const wrapper = shallowMount(NetworkCard, {
        localVue,
        propsData: {
          network: {
            name: 'TestWifi',
            description: 'Test description'
          }
        }
      });
      const title = wrapper.find('[data-card-title]');
      expect(title.text()).toEqual('TestWifi');
      const description = wrapper.find('[data-card-description]');
      expect(description.text()).toEqual('Test description');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
