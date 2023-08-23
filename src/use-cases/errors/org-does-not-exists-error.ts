export class OrgDoesNotExistsError extends Error {
  constructor() {
    super('Org does not exists error.')
  }
}
