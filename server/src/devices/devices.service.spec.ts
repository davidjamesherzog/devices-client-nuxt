import { Test, TestingModule } from '@nestjs/testing';
import { NetworksService } from '../networks/networks.service';
import { DevicesService } from './devices.service';
import { DevicesRepository } from './devices.respository';

describe('DevicesService', () => {
  let service: DevicesService;
  let repository: DevicesRepository;
  let networksService: NetworksService;

  const mockNetworksService = {
    list: jest.fn(),
    add: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn()
  };

  const networksServiceProvider = {
    provide: NetworksService,
    useValue: mockNetworksService
  };

  const mockDevicesRepository = {
    addDevice: jest.fn()
  };

  const devicesRepositoryProvider = {
    provide: DevicesRepository,
    useValue: mockDevicesRepository
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DevicesService,
        devicesRepositoryProvider,
        networksServiceProvider
      ]
    }).compile();

    networksService = module.get<NetworksService>(NetworksService);
    repository = module.get<DevicesRepository>(DevicesRepository);
    service = module.get<DevicesService>(DevicesService);
  });

  it('should be defined', () => {
    expect(networksService).toBeDefined();
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
