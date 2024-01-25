import { knex as setupKnex } from 'knex' // importando o knex

// configurando o tipo de banco e dados de conexão (aqui iria user, senha, etc)
// no caso de sqlite só precisa do filename

export const config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db', // caminho relativo ao arquivo que está guardando dados
  },
  useNullAsDefault: true, // todos os campos sem info vão ser nulos por padrão
}

export const knex = setupKnex(config)
