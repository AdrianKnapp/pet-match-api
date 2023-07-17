import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetsUseCase } from './get-pets'
import { fred } from '@/utils/mocks/pets'

let petsRepository: InMemoryPetsRepository
let sut: GetPetsUseCase

describe('Get Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetsUseCase(petsRepository)
  })

  it('should be able to get pets by query params', async () => {
    petsRepository.create(fred)
    petsRepository.create({
      ...fred,
      type: 'cat',
    })
    petsRepository.create({
      ...fred,
      age: 'baby',
    })

    const { pets } = await sut.execute({
      age: 'baby',
    })

    expect(pets).toEqual([
      expect.objectContaining({
        age: 'baby',
      }),
    ])
  })
})
