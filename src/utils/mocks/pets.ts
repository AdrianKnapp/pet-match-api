import { CreatePetUseCaseRequest } from '@/use-cases/pets/create'

export const petMock: CreatePetUseCaseRequest = {
  name: 'Violeta',
  city: 'Pelotas',
  description: 'Mansa e tranquila.',
  org_id: '',
  images: [],
  requisites: ['Espaço amplo.'],
  age: 'adult',
  energy: 'medium',
  environment: 'medium',
  independency: 'high',
  size: 'medium',
  type: 'dog',
}
