import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { NetworkTypes } from './network-types.enum';

@Entity()
export class Networks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: NetworkTypes;
}
