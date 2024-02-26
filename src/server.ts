import fastify from 'fastify'
import { knex } from './database' // constante que tem o setupKnex dentro dela
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
// import crypto from 'node:crypto'

const app = fastify()

// fazendo um GET com fastify: http://localhost:3333/hello
// primeiro vem o recurso, depois função com o retorno desejado

/**
 * JS : é runtime checking, ou seja, só descubro que tá ]
 * dando erro quando executo o código

 * TS : é compile time checking, ou seja, descubro o erro
 * durante o desenvolvimento, durante a digitação do código
 
 * Nem toda plataforma entende TS. Nodejs não entende. Bum
 * e Deno entendem.
 */

// registrando plugins: fastify executa na ordem
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

// o listen ouve uma porta e é uma promise
// quando ele retornar resposta, ele vai executar o then
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
