import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Delete
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { Devices } from './devices.entity';
import { AddDevicesDto } from './dtos/add-devices.dto';
import { UpdateDevicesDto } from './dtos/update-devices.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  list(): Promise<Array<Devices>> {
    return this.devicesService.list();
  }

  @Post()
  @UsePipes(ValidationPipe)
  add(@Body() addDevicesDTO: AddDevicesDto): Promise<Devices> {
    return this.devicesService.add(addDevicesDTO);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Devices> {
    return this.devicesService.findById(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDevicesDTO: UpdateDevicesDto
  ): Promise<Devices> {
    return this.devicesService.update(id, updateDevicesDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.devicesService.delete(id);
  }
}
