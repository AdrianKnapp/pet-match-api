import { OrgsRepository } from '@/repositories/orgs-repository'
import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'
import { OrgDoesNotExistsError } from '../errors/org-does-not-exists-error'

export interface CreatePetUseCaseRequest {
  name: string
  description: string
  images: string[]
  requisites: string[]
  city: string
  age: 'baby' | 'young' | 'adult' | 'senior'
  size: 'small' | 'medium' | 'large'
  energy: 'medium' | 'lower' | 'low' | 'high' | 'higher'
  independency: 'medium' | 'low' | 'high'
  environment: 'small' | 'medium' | 'large'
  type: 'dog' | 'cat' | 'other'
  org_id: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private orgsRepository: OrgsRepository,
  ) {}

  async execute({
    name,
    description,
    images,
    requisites,
    city,
    age,
    size,
    energy,
    independency,
    environment,
    type,
    org_id,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const org = await this.orgsRepository.getById(org_id)

    if (!org) {
      throw new OrgDoesNotExistsError()
    }

    const pet = await this.petsRepository.create({
      name,
      description,
      city,
      age,
      size,
      energy,
      independency,
      environment,
      type,
      images: {
        set: images,
      },
      requisites: {
        set: requisites,
      },
      org_id,
    })

    return {
      pet,
    }
  }
}
