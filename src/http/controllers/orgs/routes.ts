import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'
import { register } from './register'
import { refresh } from './refresh'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs/authenticate', authenticate)
  app.post('/orgs/register', register)

  app.patch('/token/refresh', refresh)
}
