import { Test, TestingModule } from '@nestjs/testing';
import { NetworksService } from './networks.service';
import { NetworksRepository } from './networks.repository';

describe('NetworksService', () => {
  let service: NetworksService;
  let repository: NetworksRepository;

  const mockNetworksRepository = {
    addNetwork: jest.fn()
  };

  const networksRepositoryProvider = {
    provide: NetworksRepository,
    useValue: mockNetworksRepository
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworksService, networksRepositoryProvider]
    }).compile();

    repository = module.get<NetworksRepository>(NetworksRepository);
    service = module.get<NetworksService>(NetworksService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
    expect(service).toBeDefined();
  });
});
