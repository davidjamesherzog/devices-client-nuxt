import {
  IsIn,
  IsOptional,
  IsNotEmpty,
  IsBooleanString,
  IsIP,
  IsMACAddress
} from 'class-validator';
import { OSTypes } from '../os-types.enum';

export class AddDevicesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

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

  @IsBooleanString()
  dhcp: string;

  @IsOptional()
  @IsIP('4')
  ipAddress: string;

  @IsMACAddress()
  macAddress: string;

  @IsNotEmpty()
  networkId: number;
}
