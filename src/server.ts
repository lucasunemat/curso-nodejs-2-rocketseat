import fastify from 'fastify'
import { knex } from './database' // constante que tem o setupKnex dentro dela
import { env } from './env'
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

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .select('*')
    .where('id', '9ab02c07-e374-4918-af67-d57752205456')
  /*  
  .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*') // indicando que quero que as info inseridas retornem na tela ao fim da transaction
  */
  return transactions
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
