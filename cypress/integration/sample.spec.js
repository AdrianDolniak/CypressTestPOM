/// <reference types="Cypress" />
import RegistrationPage from '../support/PageObjects/RegistrationPage'

describe('Automation Test Suite', () => {
  let userData

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      userData = data;
    })
  })
  it('Cypress Test Case', () => {

    // Object Creation for PageObject Page Class and assigning it to a constant variable
    const registrationPage = new RegistrationPage()

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    registrationPage.getFirstName().type(userData.FirstName)
      .should('have.value', userData.FirstName)
    registrationPage.getLastName().type(userData.LastName)
      .should('have.value', userData.LastName)
    registrationPage.getUsername().type(userData.Username)
      .should('have.value', userData.Username)
    registrationPage.getPassword().type(userData.Password)
      .should('have.value', userData.Password)
  })
})