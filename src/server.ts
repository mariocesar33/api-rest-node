import fasttify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fasttify()

// Tem de ser antes das rotas, porque se eu quero trabalhar com cookies dentro da rota, o cadastro do modulo do cookie precisa de acontecer antes
app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Serve running!')
  })
