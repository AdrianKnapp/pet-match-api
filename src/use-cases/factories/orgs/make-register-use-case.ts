import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterOrgUseCase } from '@/use-cases/orgs/register'

export function makeRegisterUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const useCase = new RegisterOrgUseCase(orgsRepository)

  return useCase
}
