import { createLocalVue, mount } from '@vue/test-utils';
import Buefy from 'buefy';
import NetworkList from '~/components/NetworkList.vue';

describe('NetworkList', () => {
  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('should render network list', () => {
      const wrapper = mount(NetworkList, {
        localVue,
        propsData: {
          networks: [
            {
              id: 1,
              name: 'TestWifi',
              description: 'Test description',
              type: 'WIFI'
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
