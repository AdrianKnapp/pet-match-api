import { app } from '@/app'
import registerOrg from './register-org'
import request from 'supertest'
import { expect } from 'vitest'
import { petMock } from '../mocks/pets'
import { CreatePetUseCaseResponse } from '@/use-cases/pets/create'

const createPet = async (): Promise<CreatePetUseCaseResponse> => {
  const {
    org: { id },
  } = await registerOrg()

  const response = await request(app.server)
    .post('/pets')
    .send({
      ...petMock,
      org_id: id,
    })

  expect(response.statusCode).toEqual(201)

  return response.body
}

export default createPet
