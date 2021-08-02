import { $axios } from '../utils/api';
import Network from './network';
import NetworkModel from '~/client/models/Network';

let mockNetworkData: Array<NetworkModel>;

jest.mock('../utils/api', () => ({
  __esModule: true,
  $axios: {
    $get: jest.fn(
      () =>
        new Promise<Array<NetworkModel>>((resolve) => {
          resolve(mockNetworkData);
        })
    )
  }
}));

describe('Networks', () => {
  let network: Network;

  beforeEach(() => {
    network = new Network();
    mockNetworkData = [
      {
        id: 1,
        name: 'WifiN',
        description: 'Test Wifi',
        type: 'WIFI'
      },
      {
        id: 2,
        name: 'Wired',
        description: 'Test Wired',
        type: 'Wired'
      }
    ];
  });

  describe('state', () => {
    test('should intialize', () => {
      expect(network.networks).toEqual([]);
    });
  });

  describe('mutations', () => {
    test('should set _networks', () => {
      network.setList(mockNetworkData);
      expect(network.networks).toEqual(mockNetworkData);
    });
  });

  describe('actions', () => {
    test('should set _networks', async () => {
      jest.spyOn(network, 'setList');
      jest.spyOn($axios, '$get');

      await network.list();
      expect($axios.$get).toHaveBeenCalledWith('/networks');
      expect(network.setList).toHaveBeenCalledWith(mockNetworkData);
    });
  });
});
