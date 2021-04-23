import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworksService } from '../networks/networks.service';
import { NetworksRepository } from '../networks/networks.repository';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { DevicesRepository } from './devices.respository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DevicesRepository]),
    TypeOrmModule.forFeature([NetworksRepository])
  ],
  controllers: [DevicesController],
  providers: [DevicesService, NetworksService]
})
export class DevicesModule {}
