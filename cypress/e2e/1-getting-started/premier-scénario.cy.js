import { faker } from '@faker-js/faker';

describe('register', () => {
  it('register with success', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register');
    cy.contains("C'est OK pour moi").click();
    cy.get('#firstName').type(faker.name.firstName());
    cy.get('#lastName').type(faker.name.lastName());
    cy.get('#signup-email').type(faker.internet.email());
    cy.get('#signup-password').type(faker.internet.password());
    cy.contains('Enchantés !').click();
  });
  it('register with error', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register');
    cy.contains("C'est OK pour moi").click();
    cy.get('#firstName').type(faker.name.firstName());
    cy.get('#lastName').type(faker.name.lastName());
    cy.get('#signup-email').type(faker.internet.email());
    cy.contains('Enchantés !').click();
  });
  it('loggin success', () => {
    cy.visit('https://preprod.backmarket.fr/fr-fr/register');
    cy.contains("C'est OK pour moi").click();
    cy.get('#signin-email').type(faker.internet.email());
    cy.get('#signin-password').type(faker.internet.password());
    cy.contains('Welcome Back!').click();
  });
});
