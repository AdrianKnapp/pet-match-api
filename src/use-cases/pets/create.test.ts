import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { CreatePetUseCase } from './create'
import { petMock } from '@/utils/mocks/pets'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/orgs-repository'

let petsRepository: InMemoryPetsRepository
let orgsRepository: InMemoryOrgsRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    orgsRepository = new InMemoryOrgsRepository()
    sut = new CreatePetUseCase(petsRepository, orgsRepository)
  })

  it('should be able to create a pet', async () => {
    const { pet } = await sut.execute(petMock)

    expect(pet.name).toEqual(petMock.name)
  })
})
