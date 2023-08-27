import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetPetByIdUseCase } from '@/use-cases/factories/pets/make-get-pet-by-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPetById(request: FastifyRequest, reply: FastifyReply) {
  const getPetByIdParamsSchema = z.object({
    petId: z.string().uuid(),
  })

  const { petId } = getPetByIdParamsSchema.parse(request.params)

  try {
    const getPetByIdUseCase = makeGetPetByIdUseCase()

    const pet = await getPetByIdUseCase.execute({ petId })

    return reply.status(200).send(pet)
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(400).send({
        message: err.message,
      })
    }
  }
}
