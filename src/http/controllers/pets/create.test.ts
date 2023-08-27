import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import registerOrg from '@/utils/tests/register-org'
import createPet from '@/utils/tests/create-pet'

describe('Create pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able create a pet', async () => {
    await createPet()
  })
})
