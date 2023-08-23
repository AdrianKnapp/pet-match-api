import { Org, Prisma } from '@prisma/client'
import { OrgsRepository } from '../orgs-repository'
import { randomUUID } from 'crypto'

export class InMemoryOrgsRepository implements OrgsRepository {
  public orgs: Org[] = []

  async create(data: Prisma.OrgUncheckedCreateInput) {
    const org: Org = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      password_hash: data.password_hash,
      address: data.address,
      zipcode: data.zipcode,
      created_at: new Date(),
    }

    this.orgs.push(org)

    return org
  }

  async getByEmail(email: string) {
    const org = this.orgs.find((org) => org.email === email)

    return org ?? null
  }

  async getById(orgId: string) {
    const org = this.orgs.find((org) => org.id === orgId)

    return org ?? null
  }
}
