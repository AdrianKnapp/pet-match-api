import { FastifyInstance } from 'fastify'
import { create } from './create'
import { getPetById } from './get-pet-by-id'
import { getPets } from './get-pets'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/pets', create)
  app.get('/pets/:petId', getPetById)
  app.get('/pets', getPets)
}
