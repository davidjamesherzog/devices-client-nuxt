import { $axios } from '../utils/api';
import Device from './device';
import DeviceModel from '~/client/models/Device';

let mockDeviceData: Array<DeviceModel>;

jest.mock('../utils/api', () => ({
  __esModule: true,
  $axios: {
    $get: jest.fn(
      () =>
        new Promise<Array<DeviceModel>>((resolve) => {
          resolve(mockDeviceData);
        })
    )
  }
}));

describe('Devices', () => {
  let device: Device;

  beforeEach(() => {
    // mockGet.mockClear();
    device = new Device();
    mockDeviceData = [
      {
        id: 1,
        name: 'Pixel2XL-Dave-Mask',
        description: 'Daves Android phone',
        os: 'Android',
        dhcp: true,
        macAddress: '',
        network: {
          id: 1,
          name: 'WifiN',
          description: 'Test Wifi',
          type: 'WIFI'
        },
        ipAddress: ''
      },
      {
        id: 2,
        name: 'Chromecast-Family',
        description: 'Family Room Chromecast Ultra',
        os: 'Chromecast',
        dhcp: true,
        macAddress: '',
        network: {
          id: 1,
          name: 'WifiN',
          description: 'Test Wifi',
          type: 'WIFI'
        },
        ipAddress: ''
      },
      {
        id: 3,
        name: 'Mackbook-Dave',
        description: 'Daves 13" Macbook Pro',
        os: 'Mac',
        dhcp: true,
        macAddress: '',
        network: {
          id: 1,
          name: 'WifiN',
          description: 'Test Wifi',
          type: 'WIFI'
        },
        ipAddress: ''
      }
    ];
  });

  describe('state', () => {
    test('should intialize', () => {
      expect(device.devices).toEqual([]);
    });
  });

  describe('mutations', () => {
    test('should set _devices', () => {
      device.setList(mockDeviceData);
      expect(device.devices).toEqual(mockDeviceData);
    });
  });

  describe('actions', () => {
    test('should set _devices', async () => {
      jest.spyOn(device, 'setList');
      jest.spyOn($axios, '$get');

      await device.list();
      expect($axios.$get).toHaveBeenCalledWith('/devices');
      expect(device.setList).toHaveBeenCalledWith(mockDeviceData);
    });
  });
});
