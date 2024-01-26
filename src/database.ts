import 'dotenv/config' // importando o dotenv para ler as variáveis de ambiente
import { knex as setupKnex, Knex } from 'knex' // importando o knex e renomeando para setupKnex

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set')
}

// configurando o tipo de banco e dados de conexão (aqui iria user, senha, etc)
// no caso de sqlite só precisa do filename

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL, // caminho relativo ao arquivo que está guardando dados
  },
  useNullAsDefault: true, // todos os campos sem info vão ser nulos por padrão
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
