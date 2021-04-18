import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'device_api',
  password: 'device_password',
  database: 'devices',
  entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
  synchronize: true
};
