import { EntityRepository, Repository } from 'typeorm';
import { Networks } from '../networks/networks.entity';
import { Devices } from './devices.entity';
import { AddDevicesDto } from './dtos/add-devices.dto';
import { UpdateDevicesDto } from './dtos/update-devices.dto';

@EntityRepository(Devices)
export class DevicesRepository extends Repository<Devices> {
  async addDevice(
    addDevicesDTO: AddDevicesDto,
    network: Networks
  ): Promise<Devices> {
    const {
      name,
      description,
      os,
      dhcp,
      ipAddress,
      macAddress
    } = addDevicesDTO;

    const device = new Devices();
    device.name = name;
    device.description = description;
    device.os = os;
    device.dhcp = dhcp === 'true';
    device.ipAddress = ipAddress;
    device.macAddress = macAddress;
    device.network = network;

    await device.save();

    return device;
  }

  async updateDevice(
    updateDevicesDTO: UpdateDevicesDto,
    device: Devices,
    network: Networks
  ): Promise<Devices> {
    const {
      name,
      description,
      os,
      dhcp,
      ipAddress,
      macAddress
    } = updateDevicesDTO;

    // check if name passed
    if (name) {
      device.name = name;
    }

    // check if description passed
    if (description) {
      device.description = description;
    }

    // check if os passed
    if (os) {
      device.os = os;
    }

    // check if dhcp passed
    if (dhcp) {
      device.dhcp = dhcp === 'true';
    }

    // check if IP Address passed
    if (ipAddress) {
      device.ipAddress = ipAddress;
    }

    // check if MAC Address passed
    if (macAddress) {
      device.macAddress = macAddress;
    }

    // check if Network passed
    if (network) {
      device.network = network;
    }

    await device.save();

    return device;
  }
}
