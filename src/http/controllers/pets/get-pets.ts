import { CityQueryParamIsRequiredError } from '@/use-cases/errors/city-query-param-is-required-error'
import { makeGetPetsUseCase } from '@/use-cases/factories/pets/make-get-pets-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPets(request: FastifyRequest, reply: FastifyReply) {
  const getPetByIdParamsSchema = z.object({
    city: z.string().optional(),
    age: z.enum(['baby', 'young', 'adult', 'senior']).optional(),
    energy: z.enum(['lower', 'low', 'medium', 'high', 'higher']).optional(),
    environment: z.enum(['small', 'medium', 'large']).optional(),
    independency: z.enum(['low', 'medium', 'high']).optional(),
    size: z.enum(['small', 'medium', 'large']).optional(),
    type: z.enum(['dog', 'cat', 'other']).optional(),
  })

  const params = getPetByIdParamsSchema.parse(request.query)

  try {
    const getPetsUseCase = makeGetPetsUseCase()

    const data = await getPetsUseCase.execute(params)

    return reply.status(200).send(data)
  } catch (err) {
    if (err instanceof CityQueryParamIsRequiredError) {
      return reply.status(400).send({
        message: err.message,
      })
    }
  }
}
