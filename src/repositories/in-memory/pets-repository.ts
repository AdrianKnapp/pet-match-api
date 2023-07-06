import { Prisma, Pet } from '@prisma/client'
import { PetsRepository } from '../pets-repository'
import { randomUUID } from 'crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public pets: Pet[] = []

  async create(data: Prisma.PetCreateInput) {
    const pet: Pet = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      images: data.images as string[],
      requisites: data.requisites as string[],
      age: data.age,
      size: data.size,
      energy: data.energy,
      org_id: data.org_id,
      orgId: data.org_id,
      independency: data.independency,
      environment: data.environment,
      adopted_at: null,
      created_at: new Date(),
    }

    this.pets.push(pet)

    return pet
  }
}
