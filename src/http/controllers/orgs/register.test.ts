import { afterAll, beforeAll, describe, it } from 'vitest'
import { app } from '@/app'
import registerOrg from '@/utils/tests/register-org'

describe('Register org (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register an org', async () => {
    await registerOrg()
  })
})
