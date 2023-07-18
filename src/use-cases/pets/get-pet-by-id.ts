import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

export interface GetPetByIdUseCaseRequest {
  petId: string
}

interface GetPetByIdUseCaseResponse {
  pet: Pet
}

export class GetPetByIdUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    petId,
  }: GetPetByIdUseCaseRequest): Promise<GetPetByIdUseCaseResponse> {
    const pet = await this.petsRepository.getPetById(petId)

    if (!pet) {
      throw new ResourceNotFoundError()
    }

    return { pet }
  }
}
