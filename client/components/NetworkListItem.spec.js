import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import NetworkListItem from '~/components/NetworkListItem.vue';

describe('NetworkListItem', () => {
  describe('type', () => {
    test('should return wifi', () => {
      const networkListItem = new NetworkListItem();
      networkListItem.network = {
        type: 'WIFI'
      };
      expect(networkListItem.type).toEqual('wifi');
    });

    test('should return ethernet-cable', () => {
      const networkListItem = new NetworkListItem();
      networkListItem.network = {
        type: 'ETHERNET'
      };
      expect(networkListItem.type).toEqual('ethernet-cable');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('should render network list item', () => {
      const wrapper = shallowMount(NetworkListItem, {
        localVue,
        propsData: {
          network: {
            id: 1,
            name: 'TestWifi',
            description: 'Test description',
            type: 'WIFI'
          }
        }
      });
      const id = wrapper.find('[data-list-item-id="1"]');
      expect(id).toBeDefined();
      const title = wrapper.find('[data-list-item-title="1"]');
      expect(title.text()).toEqual('TestWifi');
      const description = wrapper.find('[data-list-item-description="1"]');
      expect(description.text()).toEqual('Test description');
      const type = wrapper.find('[data-list-item-type="1"]');
      expect(type.text()).toEqual('WIFI');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
