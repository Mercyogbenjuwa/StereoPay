import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const connectionSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  logger: 'debug',
  entities: ['src/media/entity/*/.ts'],
  migrations: ['src/db/migration/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
});

export const dataSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: true,
  logger: 'debug',
  entities: ['entities/*/.ts'],
};
