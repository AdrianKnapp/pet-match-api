import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetsByCityUseCase } from './get-pets-by-city'
import { petFredMock } from '@/utils/mocks/pets'

let petsRepository: InMemoryPetsRepository
let sut: GetPetsByCityUseCase

describe('Create Pets By City Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetsByCityUseCase(petsRepository)
  })

  it('should be able to get pets by city', async () => {
    await petsRepository.create({
      ...petFredMock,
      city: 'São Paulo',
    })

    const { pets } = await sut.execute({
      city: 'São Pa',
    })

    expect(pets).toEqual([
      expect.objectContaining({
        city: 'São Paulo',
      }),
    ])
  })

  it('should not be able to get pets by unregistered city', async () => {
    await petsRepository.create(petFredMock)

    const { pets } = await sut.execute({
      city: 'São Paulo',
    })

    expect(pets).toEqual([])
  })
})
