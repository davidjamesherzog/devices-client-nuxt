import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';
import { NetworkTypes } from '../network-types.enum';

export class UpdateNetworksDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsIn([NetworkTypes.WIFI, NetworkTypes.WIRED])
  type: NetworkTypes;
}
