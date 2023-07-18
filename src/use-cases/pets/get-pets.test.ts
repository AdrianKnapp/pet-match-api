import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetsUseCase } from './get-pets'
import { petFredMock } from '@/utils/mocks/pets'

let petsRepository: InMemoryPetsRepository
let sut: GetPetsUseCase

describe('Get Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetsUseCase(petsRepository)
  })

  it('should be able to get pets by query params', async () => {
    await petsRepository.create(petFredMock)
    await petsRepository.create({
      ...petFredMock,
      type: 'cat',
    })
    await petsRepository.create({
      ...petFredMock,
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
