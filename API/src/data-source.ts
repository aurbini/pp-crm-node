import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Donors } from './entity/Donor';
import { Notes } from './entity/Note';
import { Donation } from './entity/Donation';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}
dotenv.config({ path: __dirname + '.env' });
let USERNAME = '';
let PASSWORD = '';
let DB = '';
let HOST = '';
if (process.env.NODE_ENV != 'production') {
  USERNAME = process.env.USERNAME.slice(0, -1);
  PASSWORD = process.env.PASSWORD.slice(0, -1);
  DB = process.env.DB.slice(0, -1);
  HOST = process.env.HOST.slice(0, -1);
} else {
  USERNAME = 'admin';
  PASSWORD = process.env.DB_PASSWORD;
  DB = 'crm';
  HOST = process.env.DATABASE_URL;
}
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: HOST,
  port: 3306,
  username: USERNAME,
  password: PASSWORD,
  database: DB,
  synchronize: false,
  logging: false,
  entities: [User, Donors, Notes, Donation],
  migrations: [''],
  subscribers: [],
});

// migrations: ['src/migration/*.ts'],
