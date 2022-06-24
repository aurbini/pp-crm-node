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
const USERNAME = process.env.USERNAME.slice(0, -1);
const PASSWORD = process.env.PASSWORD.slice(0, -1);
const DB = process.env.DB.slice(0, -1);
const HOST = process.env.HOST.slice(0, -1);
const host =
  process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : HOST;
//  HOST;
const userName = process.env.NODE_ENV == 'production' ? 'admin' : USERNAME;
// USERNAME;
const password =
  process.env.NODE_ENV == 'production' ? process.env.DB_PASSWORD : PASSWORD;
//  PASSWORD;
const database = process.env.NODE_ENV == 'production' ? 'crm' : 'ppcrm2';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: host,
  port: 3306,
  username: userName,
  password: password,
  database: database,
  synchronize: false,
  logging: false,
  entities: [User, Donors, Notes, Donation],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
});
