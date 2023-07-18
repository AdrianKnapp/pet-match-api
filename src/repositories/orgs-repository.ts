import { Org, Prisma } from '@prisma/client'

export interface OrgsRepository {
  create(data: Prisma.OrgUncheckedCreateInput): Promise<Org>
}
