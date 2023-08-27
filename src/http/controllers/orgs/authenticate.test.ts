import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import authenticateOrg from '@/utils/tests/authenticate-org'
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

    await authenticateOrg()
  })
})
