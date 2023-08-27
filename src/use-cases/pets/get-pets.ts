import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'
import { CityQueryParamIsRequiredError } from '../errors/city-query-param-is-required-error'

export interface GetPetsUseCaseRequest {
  age?: 'baby' | 'young' | 'adult' | 'senior'
  size?: 'small' | 'medium' | 'large'
  energy?: 'medium' | 'lower' | 'low' | 'high' | 'higher'
  independency?: 'medium' | 'low' | 'high'
  environment?: 'small' | 'medium' | 'large'
  type?: 'dog' | 'cat' | 'other'
  orgId?: string
  city?: string
}

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
    city,
  }: GetPetsUseCaseRequest): Promise<GetPetsUseCaseResponse> {
    if (!city) {
      throw new CityQueryParamIsRequiredError()
    }

    const pets = await this.petsRepository.getPets({
      age,
      size,
      energy,
      independency,
      environment,
      type,
      orgId,
      city,
    })

    return {
      pets,
    }
  }
}
