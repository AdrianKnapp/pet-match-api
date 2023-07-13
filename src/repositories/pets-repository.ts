import { Pet, Prisma } from '@prisma/client'

export interface GetPetsByCityParams {
  latitude: number
  longitude: number
}

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  getPetsByCity(params: GetPetsByCityParams): Promise<Pet[]>
}
