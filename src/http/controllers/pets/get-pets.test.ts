import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import createPet from '@/utils/tests/create-pet'

describe('Get pets (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get pets', async () => {
    const {
      pet: { city },
    } = await createPet()

    const response = await request(app.server).get(`/pets?city=${city}`)

    expect(response.statusCode).toEqual(200)
  })
})
