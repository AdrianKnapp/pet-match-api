import { GetPetsQuery, PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'

export interface GetPetsUseCaseRequest extends GetPetsQuery {}

interface GetPetsUseCaseResponse {
  pets: Pet[]
}

export class GetPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    age,
    size,
    energy,
    independency,
    environment,
    type,
    orgId,
  }: GetPetsUseCaseRequest): Promise<GetPetsUseCaseResponse> {
    const pets = await this.petsRepository.getPets({
      age,
      size,
      energy,
      independency,
      environment,
      type,
      orgId,
    })

    return {
      pets,
    }
  }
}
