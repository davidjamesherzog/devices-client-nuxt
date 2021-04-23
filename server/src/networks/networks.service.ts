import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Networks } from './networks.entity';
import { AddNetworksDto } from './dtos/add-networks.dto';
import { UpdateNetworksDto } from './dtos/update-networks.dto';
import { NetworksRepository } from './networks.repository';

@Injectable()
export class NetworksService {
  constructor(
    @InjectRepository(NetworksRepository)
    private networksRepository: NetworksRepository
  ) {}

  async list(): Promise<Array<Networks>> {
    return await this.networksRepository.find();
  }

  async add(addNetworksDTO: AddNetworksDto): Promise<Networks> {
    return await this.networksRepository.addNetwork(addNetworksDTO);
  }

  async findById(id: number): Promise<Networks> {
    const network: Networks = await this.networksRepository.findOne(id);

    if (!network) {
      throw new NotFoundException(`Network with ID "${id}" not found`);
    }

    return network;
  }

  async update(
    id: number,
    updateNetworksDTO: UpdateNetworksDto
  ): Promise<Networks> {
    const network: Networks = await this.findById(id);
    return await this.networksRepository.updateNetwork(
      updateNetworksDTO,
      network
    );
  }

  async delete(id: number): Promise<void> {
    const network = await this.networksRepository.delete(id);

    if (network.affected === 0) {
      throw new NotFoundException(`Network with ID "${id}" not found`);
    }
  }
}
