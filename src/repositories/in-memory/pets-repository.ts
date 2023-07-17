import { Prisma, Pet } from '@prisma/client'
import {
  GetPetsByCityParams,
  GetPetsQuery,
  PetsRepository,
} from '../pets-repository'
import { randomUUID } from 'crypto'

export class InMemoryPetsRepository implements PetsRepository {
  public pets: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
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
    return this.pets
  }

  async getPets(pets: GetPetsQuery) {
    // const pets = this.pets.filter((pet) => {})

    return this.pets
  }
}
