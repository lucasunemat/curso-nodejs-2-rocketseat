import type { Knex } from 'knex'

// para executar o que você fez: npm run knex -- migrate:latest

// up: o que a migration fará no bd
// ex: criei tabela
export async function up(knex: Knex): Promise<void> {
  // nome da tabela: transactions
  await knex.schema.createTable('transactions', (table) => {
    // criando campos na tabela
    table.uuid('id').primary() // id com padrão uuid
    table.text('title').notNullable() // title do tipo text não nulo
    table.decimal('amount', 10, 2).notNullable() // amount do tipo decimal não nulo (10 casas, precisão de 2 cadas pos virgula)
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() // data de criação do registro (knex.fn.now() é um jeito de retornar data atual em todos os bancos)
  })
}

// down: o que a migration fará caso precise voltar atrás (rollback)
// o contrario do up
// ex: deleto tabela
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
