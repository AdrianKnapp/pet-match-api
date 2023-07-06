import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  description: string
  images: string[]
  requisites: string[]
  age: 'baby' | 'young' | 'adult' | 'senior'
  size: 'small' | 'medium' | 'large'
  energy: 'medium' | 'lower' | 'low' | 'high' | 'higher'
  independency: 'medium' | 'low' | 'high'
  environment: 'small' | 'medium' | 'large'
  org_id: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    name,
    description,
    images,
    requisites,
    age,
    size,
    energy,
    independency,
    environment,
    org_id,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name,
      description,
      images,
      requisites,
      age,
      size,
      energy,
      independency,
      environment,
      org_id,
    })

    return {
      pet,
    }
  }
}
