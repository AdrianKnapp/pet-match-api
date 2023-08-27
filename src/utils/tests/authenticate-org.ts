import { app } from '@/app'
import request from 'supertest'
import { expect } from 'vitest'
import { adoptOrgMock } from '../mocks/orgs'

const authenticateOrg = async (): Promise<{
  token: string
}> => {
  const response = await request(app.server).post('/orgs/authenticate').send({
    email: adoptOrgMock.email,
    password: adoptOrgMock.password,
  })

  expect(response.statusCode).toEqual(200)

  return response.body
}

export default authenticateOrg
