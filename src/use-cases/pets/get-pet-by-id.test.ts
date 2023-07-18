import { InMemoryPetsRepository } from '../../repositories/in-memory/pets-repository'
import { describe, it, beforeEach, expect } from 'vitest'
import { GetPetByIdUseCase } from './get-pet-by-id'
import { petFredMock } from '@/utils/mocks/pets'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let petsRepository: InMemoryPetsRepository
let sut: GetPetByIdUseCase

describe('Create Pet By Id Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new GetPetByIdUseCase(petsRepository)
  })

  it('should be able to get a pet by id', async () => {
    const petCreated = await petsRepository.create(petFredMock)

    const { pet } = await sut.execute({
      petId: petCreated.id,
    })

    expect(pet.name).toEqual(petFredMock.name)
  })

  it('should not be able to get pet with wrong city', async () => {
    await expect(() =>
      sut.execute({
        petId: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
