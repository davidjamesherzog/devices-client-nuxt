import { createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';
import DeviceList from '~/components/DeviceList.vue';

describe('DeviceList', () => {
  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('should render device list', () => {
      const wrapper = mount(DeviceList, {
        localVue,
        propsData: {
          devices: [
            {
              id: 1,
              name: 'Macbook-Dave',
              description: 'Macbook laptop',
              os: 'Mac'
            }
          ]
        }
      });
      const id = wrapper.find('[data-list-item-id="1"]');
      expect(id).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
