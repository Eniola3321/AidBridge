import { DataSourceOptions } from 'typeorm';
import { join } from 'path';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'aidbridge',
  entities: [join(__dirname, '../entities/**/*.entity.{ts,js}')],
  migrations: [join(__dirname, '../../migrations/**/*.{ts,js}')],
  subscribers: [],
  synchronize: process.env.NODE_ENV !== 'production', // Only in dev
  logging: process.env.NODE_ENV !== 'production',
  migrationsRun: true,
};
