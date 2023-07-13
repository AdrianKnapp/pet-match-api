import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetsByCityUseCase } from './get-pets-by-city'

let petsRepository: InMemoryPetsRepository
let sut: GetPetsByCityUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetsByCityUseCase(petsRepository)
  })

  it('should be able to create a pet', async () => {
    const pet = await sut.execute({
      latitude: -31.7718528,
      longitude: -52.314112,
    })

    expect(pet).toBeDefined()
  })
})
