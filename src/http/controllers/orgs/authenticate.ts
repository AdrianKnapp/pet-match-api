import { makeAuthenticateUseCase } from '@/use-cases/factories/orgs/make-authenticate-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateOrgBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateOrgBodySchema.parse(request.body)

  const authenticateUseCase = makeAuthenticateUseCase()

  await authenticateUseCase.execute({
    email,
    password,
  })

  return reply.status(200).send()
}
