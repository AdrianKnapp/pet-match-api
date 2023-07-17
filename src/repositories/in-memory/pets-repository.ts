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

  async getPets(petsQuery: GetPetsQuery) {
    const petsFiltered = this.pets.filter((pet) => {
      if (petsQuery.type && petsQuery.type !== pet.type) {
        return false
      }

      if (petsQuery.age && petsQuery.age !== pet.age) {
        return false
      }

      if (petsQuery.size && petsQuery.size !== pet.size) {
        return false
      }

      if (petsQuery.energy && petsQuery.energy !== pet.energy) {
        return false
      }

      if (
        petsQuery.independency &&
        petsQuery.independency !== pet.independency
      ) {
        return false
      }

      if (petsQuery.environment && petsQuery.environment !== pet.environment) {
        return false
      }

      if (petsQuery.orgId && petsQuery.orgId !== pet.org_id) {
        return false
      }

      return true
    })

    return petsFiltered
  }
}
