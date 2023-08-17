import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { GetPetByIdUseCase } from '@/use-cases/pets/get-pet-by-id'

export function makeGetPetByIdUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new GetPetByIdUseCase(petsRepository)

  return useCase
}
