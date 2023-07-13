import { Prisma, Pet } from '@prisma/client'
import { GetPetsByCityParams, PetsRepository } from '../pets-repository'
import { randomUUID } from 'crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public pets: Pet[] = []

  async create(data: Prisma.PetCreateManyInput) {
    const pet: Pet = {
      id: randomUUID(),
      name: data.name,
      description: data.description,
      images: data.images as string[],
      requisites: data.requisites as string[],
      type: data.type,
      age: data.age,
      size: data.size,
      energy: data.energy,
      org_id: data.org_id,
      independency: data.independency,
      environment: data.environment,
      adopted_at: null,
      created_at: new Date(),
    }

    this.pets.push(pet)

    return pet
  }

  async getPetsByCity(params: GetPetsByCityParams) {
    return {
      pets: this.pets,
      // TODO: remove this any
    } as any
  }
}
