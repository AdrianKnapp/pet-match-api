import { InMemoryPetsRepository } from '@/repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { CreatePetUseCase } from './create'
import { fred } from '@/utils/mocks/pets'

let petsRepository: InMemoryPetsRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository)
  })

  it('should be able to create a pet', () => {
    const pet = sut.execute(fred)
    console.log('🚀 ~ file: create.test.ts:17 ~ it ~ pet:', pet)

    expect(petsRepository.pets).toHaveLength(1)
  })
})
