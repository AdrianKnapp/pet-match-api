import { Prisma } from '@prisma/client'

export const fred: Prisma.PetCreateInput = {
  name: 'Fred',
  description: 'Tall and strong.',
  age: 'senior',
  energy: 'high',
  size: 'large',
  environment: 'medium',
  images: [''],
  independency: 'high',
  requisites: [''],
  org_id: 'org_id',
}
