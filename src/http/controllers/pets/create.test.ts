import { afterAll, beforeAll, describe, it } from 'vitest'
import { app } from '@/app'
import createPet from '@/utils/tests/create-pet'

describe('Create pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a pet', async () => {
    await createPet()
  })
})
