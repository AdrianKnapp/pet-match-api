export class CityQueryParamIsRequiredError extends Error {
  constructor() {
    super('City query param is required.')
  }
}
