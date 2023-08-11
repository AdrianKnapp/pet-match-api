# Pet Match REST API
Find your friend.

## FRs (Functional requirements)
- [X] Should be able to register a pet.
- [X] Should be able to list every pet able to be adopted in a city.
- [X] Should be able to filter pets by their characteristics.
- [X] Should be able to view details of a pet for adoption.
- [X] Should be able to register as an organization.
- [X] Should be able to login as an organization.

## BRs (Business rules)
- [X] To list pets, the city should be provided.
- [X] An organization needs to have an address and a WhatsApp number.
- [X] A pet should be linked to an organization.
- [X] The user that wants to adopt a pet, should get in contact with the organization by his WhatsApp number.
- [X] Every filter, expect the city, is optional.
- [ ] For an organization to access the app as an ADMIN, they should be logged in.

## NFR (Non-functional requirements)
- [X] The organizations password should be encrypted.
- [X] The data should be stored in a PostgreSQL database.
- [ ] Every data list should be paginated with 20 items per page.
- [ ] The organization should be identified by a JWT token.