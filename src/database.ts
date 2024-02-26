import { knex as setupKnex, Knex } from 'knex' // importando o knex e renomeando para setupKnex
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set')
}

// configurando o tipo de banco e dados de conexão (aqui iria user, senha, etc)
// no caso de sqlite só precisa do filename

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL, // caminho relativo ao arquivo que está guardando dados
  },
  useNullAsDefault: true, // todos os campos sem info vão ser nulos por padrão
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

// exportação da constante contendo configurações do banco de dados
export const knex = setupKnex(config)

// const knex --> server.ts
// env --> server.ts
// env --> database.ts --> knexfile.ts
