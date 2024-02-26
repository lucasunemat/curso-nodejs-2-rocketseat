/* eslint-disable */

import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

// isso é um plugin do fastify, feito para separar as rotas
// sempre precisa ser async function
// FastifyInstance é justamente isso, a instância do fastify
// com suas opções de ações (escreva app para testar)
export async function transactionsRoutes(app: FastifyInstance) {
    //já vai ser /transactions porque foi passado no app.register
    app.post('/', async (request) => {
        // request.body é o corpo da requisição
        // {title, amount, : credit or debit}


        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit']),
        })

        //validando de acordo com o schema
        //se não validar, não passa para baixo
        const { title, amount, type } = createTransactionBodySchema.parse(request.body)

        return transactions
    })
}
