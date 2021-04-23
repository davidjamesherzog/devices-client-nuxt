import { Test, TestingModule } from '@nestjs/testing';
import { NetworksController } from './networks.controller';
import { NetworksService } from './networks.service';

describe('NetworksController', () => {
  let controller: NetworksController;
  let service: NetworksService;

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworksController],
      providers: [networksServiceProvider]
    }).compile();

    service = module.get<NetworksService>(NetworksService);
    controller = module.get<NetworksController>(NetworksController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
