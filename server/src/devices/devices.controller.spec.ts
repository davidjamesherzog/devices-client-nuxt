import { Test, TestingModule } from '@nestjs/testing';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';

describe('DevicesController', () => {
  let controller: DevicesController;
  let service: DevicesService;

  const mockDevicesService = {
    list: jest.fn(),
    add: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn()
  };

  const devicesServiceProvider = {
    provide: DevicesService,
    useValue: mockDevicesService
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicesController],
      providers: [devicesServiceProvider]
    }).compile();

    service = module.get<DevicesService>(DevicesService);
    controller = module.get<DevicesController>(DevicesController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
  });
});
