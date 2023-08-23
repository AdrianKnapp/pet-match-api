import { OrgDoesNotExistsError } from '@/use-cases/errors/org-does-not-exists-error'
import { makeCreatePetUseCase } from '@/use-cases/factories/pets/make-create-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    description: z.string(),
    org_id: z.string().min(36).max(36),
    images: z.array(z.string()),
    requisites: z.array(z.string()),
    age: z.enum(['baby', 'young', 'adult', 'senior']),
    energy: z.enum(['lower', 'low', 'medium', 'high', 'higher']),
    environment: z.enum(['small', 'medium', 'large']),
    independency: z.enum(['low', 'medium', 'high']),
    size: z.enum(['small', 'medium', 'large']),
    type: z.enum(['dog', 'cat', 'other']),
  })

  const pet = createPetBodySchema.parse(request.body)

  try {
    const checkInUseCase = makeCreatePetUseCase()

    const petCreated = await checkInUseCase.execute(pet)

    return reply.status(200).send(petCreated)
  } catch (err) {
    if (err instanceof OrgDoesNotExistsError) {
      return reply.status(400).send({
        message: err.message,
      })
    }
  }
}
