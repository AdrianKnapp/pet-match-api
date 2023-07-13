import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'

export interface GetPetsByCityUseCaseRequest {
  latitude: number
  longitude: number
}

interface GetPetsByCityUseCaseResponse {
  pets: Pet[]
}

export class GetPetsByCityUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    latitude,
    longitude,
  }: GetPetsByCityUseCaseRequest): Promise<GetPetsByCityUseCaseResponse> {
    const pets = await this.petsRepository.getPetsByCity({
      longitude,
      latitude,
    })

    return { pets }
  }
}
