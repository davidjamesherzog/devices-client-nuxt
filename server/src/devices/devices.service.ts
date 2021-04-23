import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Networks } from '../networks/networks.entity';
import { NetworksService } from '../networks/networks.service';
import { DevicesRepository } from './devices.respository';
import { Devices } from './devices.entity';
import { AddDevicesDto } from './dtos/add-devices.dto';
import { UpdateDevicesDto } from './dtos/update-devices.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(DevicesRepository)
    private devicesRepository: DevicesRepository,
    private networksService: NetworksService
  ) {}

  async list(): Promise<Array<Devices>> {
    return await this.devicesRepository.find({ relations: ['network'] });
  }

  async add(addDevicesDTO: AddDevicesDto): Promise<Devices> {
    const network: Networks = await this.networksService.findById(
      addDevicesDTO.networkId
    );
    return await this.devicesRepository.addDevice(addDevicesDTO, network);
  }

  async findById(id: number): Promise<Devices> {
    const device: Devices = await this.devicesRepository.findOne(id, {
      relations: ['network']
    });

    if (!device) {
      throw new NotFoundException(`Device with ID "${id}" not found`);
    }

    return device;
  }

  async update(
    id: number,
    updateDevicesDTO: UpdateDevicesDto
  ): Promise<Devices> {
    const network: Networks = await this.networksService.findById(
      updateDevicesDTO.networkId
    );
    const device: Devices = await this.findById(id);
    return await this.devicesRepository.updateDevice(
      updateDevicesDTO,
      device,
      network
    );
  }

  async delete(id: number): Promise<void> {
    const device = await this.devicesRepository.delete(id);

    if (device.affected === 0) {
      throw new NotFoundException(`Device with ID "${id}" not found`);
    }
  }
}
