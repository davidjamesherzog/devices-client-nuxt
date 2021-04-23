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
import { NetworksService } from './networks.service';
import { Networks } from './networks.entity';
import { AddNetworksDto } from './dtos/add-networks.dto';
import { UpdateNetworksDto } from './dtos/update-networks.dto';

@Controller('networks')
export class NetworksController {
  constructor(private readonly networksService: NetworksService) {}

  @Get()
  list(): Promise<Array<Networks>> {
    return this.networksService.list();
  }

  @Post()
  @UsePipes(ValidationPipe)
  add(@Body() addNetworksDTO: AddNetworksDto): Promise<Networks> {
    return this.networksService.add(addNetworksDTO);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Networks> {
    return this.networksService.findById(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNetworksDTO: UpdateNetworksDto
  ): Promise<Networks> {
    return this.networksService.update(id, updateNetworksDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.networksService.delete(id);
  }
}
