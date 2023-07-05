import { FastifyReply, FastifyRequest } from 'fastify'

export async function create(request: FastifyRequest, response: FastifyReply) {
  const { name } = request.body as {
    name: string
  }

  response.send({ name })
}
