import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/orgs-repository'
import { adoptOrgMock } from '@/utils/mocks/orgs'
import { AuthenticateOrgUseCase } from './authenticate'
import { hash } from 'bcryptjs'

let orgsRepository: InMemoryOrgsRepository
let sut: AuthenticateOrgUseCase

describe('Register Org Use Case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new AuthenticateOrgUseCase(orgsRepository)
  })

  it('should be able to register a org', async () => {
    orgsRepository.create({
      ...adoptOrgMock,
      password_hash: await hash(adoptOrgMock.password, 6),
    })

    const { org } = await sut.execute({
      email: adoptOrgMock.email,
      password: adoptOrgMock.password,
    })

    expect(org.name).toEqual(adoptOrgMock.name)
  })
})
