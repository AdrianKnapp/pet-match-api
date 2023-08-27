import request from 'supertest'
import { app } from '@/app'
import { expect } from 'vitest'
import { AuthenticateOrgUseCaseResponse } from '@/use-cases/orgs/authenticate'
import { adoptOrgMock } from '../mocks/orgs'

const registerOrg = async (): Promise<AuthenticateOrgUseCaseResponse> => {
  const response = await request(app.server)
    .post('/orgs/register')
    .send(adoptOrgMock)

  expect(response.statusCode).toEqual(201)

  return response.body
}

export default registerOrg
