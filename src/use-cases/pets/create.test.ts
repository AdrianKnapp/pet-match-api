import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { CreatePetUseCase } from './create'
import { petFredMock } from '@/utils/mocks/pets'
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
    const { pet } = await sut.execute(petFredMock)

    expect(pet.name).toEqual(petFredMock.name)
  })
})
