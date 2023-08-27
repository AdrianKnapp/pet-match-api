import { RegisterOrgUseCaseRequest } from '@/use-cases/orgs/register'

export const adoptOrgMock: RegisterOrgUseCaseRequest = {
  email: 'test@gmail.com',
  password: 'Pw@1234',
  address: 'Juscelino Kubitschek',
  name: 'Adopt Org',
  phone: '51914723123',
  zipcode: '06472310',
}
