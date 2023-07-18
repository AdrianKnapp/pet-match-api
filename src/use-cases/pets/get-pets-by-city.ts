import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'

export interface GetPetsByCityUseCaseRequest {
  city: string
}

interface GetPetsByCityUseCaseResponse {
  pets: Pet[]
}

export class GetPetsByCityUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
  }: GetPetsByCityUseCaseRequest): Promise<GetPetsByCityUseCaseResponse> {
    const pets = await this.petsRepository.getPetsByCity(city)

    return { pets }
  }
}
