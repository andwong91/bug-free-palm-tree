import { defineConfig } from '@adonisjs/lucid';

const { 
  DB_HOST,
  DB_PORT = 5432,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: DB_HOST,
        port: DB_PORT as number,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig