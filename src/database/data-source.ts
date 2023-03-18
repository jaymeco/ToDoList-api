import { DataSource } from "typeorm"

const {
  DB_TYPE,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_PASSWORD,
  DB_USERNAME,
} = process.env;

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['../models/*.ts'],
  subscribers: [],
  migrations: ['./migrations/*.ts'],
})
