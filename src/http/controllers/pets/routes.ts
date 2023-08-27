import { FastifyInstance } from 'fastify'
import { create } from './create'
import { getPetById } from './get-pet-by-id'
import { getPets } from './get-pets'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets/:petId', getPetById)
  app.get('/pets', getPets)

  app.post(
    '/pets',
    {
      onRequest: [verifyJWT],
    },
    create,
  )
}
