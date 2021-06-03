import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import DeviceListItem from '~/components/DeviceListItem.vue';

describe('DeviceListItem', () => {
  describe('type', () => {
    test('should return laptop (Mac)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Mac'
      };
      expect(deviceListItem.type).toEqual('laptop');
    });

    test('should return laptop (Windows)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Windows'
      };
      expect(deviceListItem.type).toEqual('laptop');
    });

    test('should return linux', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Linux'
      };
      expect(deviceListItem.type).toEqual('linux');
    });

    test('should return android', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Android'
      };
      expect(deviceListItem.type).toEqual('android');
    });

    test('should return apple-ios', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'iOS'
      };
      expect(deviceListItem.type).toEqual('apple-ios');
    });

    test('should return television (Samsung)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Samsung'
      };
      expect(deviceListItem.type).toEqual('television');
    });

    test('should return television (Vizio)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Vizio'
      };
      expect(deviceListItem.type).toEqual('television');
    });

    test('should return television (FireTV)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'FireTV'
      };
      expect(deviceListItem.type).toEqual('television');
    });

    test('should return television (Roku)', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Roku'
      };
      expect(deviceListItem.type).toEqual('television');
    });

    test('should return microsoft-xbox', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Xbox'
      };
      expect(deviceListItem.type).toEqual('microsoft-xbox');
    });

    test('should return sony-playstation', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Playstation'
      };
      expect(deviceListItem.type).toEqual('sony-playstation');
    });

    test('should return cast', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Chromecast'
      };
      expect(deviceListItem.type).toEqual('cast');
    });

    test('should return chrome', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Chromebook'
      };
      expect(deviceListItem.type).toEqual('chrome');
    });

    test('should return blank', () => {
      const deviceListItem = new DeviceListItem();
      deviceListItem.device = {
        os: 'Other'
      };
      expect(deviceListItem.type).toEqual('');
    });
  });

  describe('template', () => {
    let localVue;

    beforeEach(() => {
      localVue = createLocalVue();
      localVue.use(Buefy);
    });

    test('should render device list item', () => {
      const wrapper = shallowMount(DeviceListItem, {
        localVue,
        propsData: {
          device: {
            id: 1,
            name: 'Macbook-Dave',
            description: 'Macbook laptop',
            os: 'Mac'
          }
        }
      });
      const id = wrapper.find('[data-list-item-id="1"]');
      expect(id).toBeDefined();
      const title = wrapper.find('[data-list-item-title="1"]');
      expect(title.text()).toEqual('Macbook-Dave');
      const description = wrapper.find('[data-list-item-description="1"]');
      expect(description.text()).toEqual('Macbook laptop');
      const os = wrapper.find('[data-list-item-os="1"]');
      expect(os.text()).toEqual('Mac');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
