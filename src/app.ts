import fasttify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fasttify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
