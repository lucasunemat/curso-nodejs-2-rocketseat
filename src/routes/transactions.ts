/* eslint-disable */

import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'

// isso é um plugin do fastify, feito para separar as rotas
// sempre precisa ser async function
// FastifyInstance é justamente isso, a instância do fastify
// com suas opções de ações (escreva app para testar)
export async function transactionsRoutes(app: FastifyInstance) {

    // select() indica que vai selecionar tudo da tabela
    app.get('/', async () => {
        const transactions = await knex('transactions').select()

        return {
            // facilita caso queira adicionar chaves com valores no futuro
            transactions
        }
    })

    app.get('/:id', async (request) => {
        // schema de validação zod
        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        //buscando apenas id dos parâmetros da req
        const { id } = getTransactionParamsSchema.parse(request.params)

        // pedindo para retorna o primeiro que encontrar (se não retorna array)
        const transaction = await knex('transactions').where('id', id).first()

        return { transaction }
    })

    app.get('/summary', async () => {
        const summary = await knex('transactions').sum('amount')

        return { summary }
    })

    //já vai ser /transactions porque foi passado no app.register
    app.post('/', async (request, reply) => {
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

        await knex('transactions')
            .insert({
                id: crypto.randomUUID(),
                title,
                amount: type === 'credit' ? amount : amount * - 1,

            })

        return reply.status(201).send()
    })
}
