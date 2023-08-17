import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { AuthenticateOrgUseCase } from '@/use-cases/orgs/authenticate'

export function makeAuthenticateUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const useCase = new AuthenticateOrgUseCase(orgsRepository)

  return useCase
}
