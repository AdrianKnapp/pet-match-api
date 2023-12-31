import { Pet, Prisma } from '@prisma/client'

export interface GetPetsQuery {
  type?: Pet['type']
  age?: Pet['age']
  size?: Pet['size']
  energy?: Pet['energy']
  independency?: Pet['independency']
  environment?: Pet['environment']
  orgId?: Pet['org_id']
  city: Pet['city']
}

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  getPetById(petId: string): Promise<Pet | null>
  getPets(query: GetPetsQuery, page?: number): Promise<Pet[]>
}
