import { Pet, Prisma } from '@prisma/client'

export interface GetPetsByCityParams {
  latitude: number
  longitude: number
}

export interface GetPetsQuery {
  type?: Pet['type']
  age?: Pet['age']
  size?: Pet['size']
  energy?: Pet['energy']
  independency?: Pet['independency']
  environment?: Pet['environment']
  orgId?: Pet['org_id']
}

export interface PetsRepository {
  create(data: Prisma.PetCreateInput): Promise<Pet>
  getPetsByCity(params: GetPetsByCityParams): Promise<Pet[]>
  getPets(query: GetPetsQuery): Promise<Pet[]>
}
