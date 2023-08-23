import { Org, Prisma } from '@prisma/client'

export interface OrgsRepository {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>
  getByEmail(email: string): Promise<Org | null>
  getById(orgId: string): Promise<Org | null>
}
