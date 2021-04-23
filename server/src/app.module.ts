import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NetworksModule } from './networks/networks.module';
import { typeOrmConfig } from './config/typeorm.config';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), NetworksModule, DevicesModule]
})
export class AppModule {}
