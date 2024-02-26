/* eslint-disable prettier/prettier */

import { Knex } from 'knex'

/**
 * isso é para tipar o knex com as tabelas que temos no banco
 */
declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
