import 'dotenv/config' // importando o dotenv para ler as variáveis de ambiente
import { z } from 'zod' // z é usado para facer schema de dados (formatos aceitos)

// enviroments: development, test, production

const envSchema = z.object({
  // NODE_ENV é o ambiente que a aplaicação está rodando atualmente
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

/**
 * Validação do zod por meio do envSchema
 * Ele vai pegar process.env, fazer uma
 * verificação se tem DATABASE_URL e qual
 * é o tipo dele. Depois vai jogar na const env
 * A partir daí você usa env.DATABASE_URL, por ex
 */

// aqui usamos safeParse para verificar se a validação deu certo
const _env = envSchema.safeParse(process.env)

// se não deu certo, vai retornar msg de erro e formata o erro
if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

// se passar do if, vai retornar os dados da variável _env para
// a const env que será exportada
export const env = _env.data
