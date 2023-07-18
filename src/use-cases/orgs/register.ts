import { OrgsRepository } from '@/repositories/orgs-repository'
import { Org } from '@prisma/client'

export interface RegisterOrgUseCaseRequest {
  name: string
  email: string
  zipcode: string
  phone: string
  password: string
  address: string
}

interface RegisterOrgUseCaseResponse {
  org: Org
}

export class RegisterOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    name,
    zipcode,
    email,
    phone,
    password,
    address,
  }: RegisterOrgUseCaseRequest): Promise<RegisterOrgUseCaseResponse> {
    const org = await this.orgsRepository.create({
      name,
      zipcode,
      email,
      phone,
      password_hash: password,
      address,
    })

    return {
      org,
    }
  }
}
