import fastify from 'fastify'
import { petsRoutes } from './http/controllers/pets/routes'
import { orgsRoutes } from './http/controllers/orgs/routes'

export const app = fastify()

app.register(petsRoutes)
app.register(orgsRoutes)
