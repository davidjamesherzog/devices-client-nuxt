import {
  IsIn,
  IsOptional,
  IsNotEmpty,
  IsBooleanString,
  IsIP,
  IsMACAddress
} from 'class-validator';
import { OSTypes } from '../os-types.enum';

export class UpdateDevicesDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsIn([
    OSTypes.MAC,
    OSTypes.WINDOWS,
    OSTypes.LINUX,
    OSTypes.ANDROID,
    OSTypes.IOS,
    OSTypes.SAMSUNG,
    OSTypes.VIZIO,
    OSTypes.FIRETV,
    OSTypes.ROKU,
    OSTypes.XBOX,
    OSTypes.PLAYSTATION,
    OSTypes.CHROMECAST,
    OSTypes.CHROMEBOOK,
    OSTypes.OTHER
  ])
  os: OSTypes;

  @IsOptional()
  @IsBooleanString()
  dhcp: string;

  @IsOptional()
  @IsIP('4')
  ipAddress: string;

  @IsOptional()
  @IsMACAddress()
  macAddress: string;

  @IsOptional()
  @IsNotEmpty()
  networkId: number;
}
