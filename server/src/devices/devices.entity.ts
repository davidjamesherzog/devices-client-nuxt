import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Networks } from '../networks/networks.entity';

@Entity()
export class Devices extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  os: string;

  @Column()
  dhcp: boolean;

  @Column({ nullable: true })
  ipAddress: string;

  @Column()
  macAddress: string;

  @ManyToOne(() => Networks, (network) => network.id)
  @JoinColumn()
  network: Networks;
}
