import { EntityRepository, Repository } from 'typeorm';
import { AddNetworksDto } from './dtos/add-networks.dto';
import { UpdateNetworksDto } from './dtos/update-networks.dto';
import { Networks } from './networks.entity';

@EntityRepository(Networks)
export class NetworksRepository extends Repository<Networks> {
  async addNetwork(addNetworksDTO: AddNetworksDto): Promise<Networks> {
    const { name, type, description } = addNetworksDTO;

    const network = new Networks();
    network.name = name;
    network.description = description;
    network.type = type;

    await network.save();

    return network;
  }

  async updateNetwork(
    updateNetworksDTO: UpdateNetworksDto,
    network: Networks
  ): Promise<Networks> {
    const { name, type, description } = updateNetworksDTO;

    // check if name passed
    if (name) {
      network.name = name;
    }

    // check if description passed
    if (description) {
      network.description = description;
    }

    // check if type passed
    if (type) {
      network.type = type;
    }

    await network.save();

    return network;
  }
}
