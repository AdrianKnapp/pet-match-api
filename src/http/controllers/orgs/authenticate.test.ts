import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import registerOrg from '@/utils/tests/register-org'

describe('Authenticate org (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {
    await registerOrg()

    const response = await request(app.server).post('/orgs/authenticate').send({
      email: 'test@gmail.com',
      password: 'Pw@1234',
    })

    expect(response.statusCode).toEqual(200)
    // expect(response.body).toEqual({
    //   token: expect.any(String),
    // })
  })
})
