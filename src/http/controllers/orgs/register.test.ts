import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'

describe('Register org (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register an org', async () => {
    const response = await request(app.server).post('/orgs/register').send({
      email: 'test@gmail.com',
      password: 'test123',
      address: 'Juscelino Kubitschek',
      name: 'Knapp Org',
      phone: '51914723123',
      zipcode: '06472310',
    })

    expect(response.statusCode).toEqual(201)
  })
})