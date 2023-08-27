import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetsUseCase } from './get-pets'
import { petMock } from '@/utils/mocks/pets'

let petsRepository: InMemoryPetsRepository
let sut: GetPetsUseCase

describe('Get Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetsUseCase(petsRepository)
  })

  it('should be able to get pets by query params', async () => {
    await petsRepository.create(petMock)
    await petsRepository.create({
      ...petMock,
      type: 'cat',
    })
    await petsRepository.create({
      ...petMock,
      age: 'baby',
    })

    const { pets } = await sut.execute({
      age: 'baby',
      city: 'Pelotas',
    })

    expect(pets).toEqual([
      expect.objectContaining({
        age: 'baby',
      }),
    ])
  })

  it('should be able to get pets on a specific city', async () => {
    await petsRepository.create(petMock)
    await petsRepository.create({
      ...petMock,
      city: 'Porto Alegre',
    })
    await petsRepository.create({
      ...petMock,
      city: 'Porto Alegre',
    })

    const { pets } = await sut.execute({
      city: 'Porto',
    })

    expect(pets).length(2)
  })
})
