import { Age, Energy, Independency, Prisma, Size, Type } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { GetPetsQuery, PetsRepository } from '../pets-repository'
import { GetResult } from '@prisma/client/runtime'

export class PrismaPetsRepository implements PetsRepository {
  getPetById(petId: string) {
    const pet = prisma.pet.findUnique({
      where: {
        id: petId,
      },
    })

    return pet
  }

  getPets(query: GetPetsQuery, page?: number | undefined) {
    const pets = prisma.pet.findMany({
      where: {
        type: query.type,
        age: query.age,
        size: query.size,
        energy: query.energy,
        independency: query.independency,
        environment: query.environment,
        org_id: query.orgId,
        city: query.city,
      },
      skip: page ? (page - 1) * 10 : undefined,
      take: 10,
    })

    return pets
  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }
}
