import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/orgs-repository'
import { RegisterOrgUseCase } from './register'
import { adoptOrgMock } from '@/utils/mocks/orgs'

let orgsRepository: InMemoryOrgsRepository
let sut: RegisterOrgUseCase

describe('Register Org Use Case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new RegisterOrgUseCase(orgsRepository)
  })

  it('should be able to register a org', async () => {
    const { org } = await sut.execute(adoptOrgMock)

    expect(org.name).toEqual(adoptOrgMock.name)
  })
})
