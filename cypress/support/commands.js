import LoginPage from '../support/PageObjects/LoginPage'
import RegistrationPage from '../support/PageObjects/RegistrationPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('registration', (FirstName, LastName, Username, Password) => {

  const loginPage = new LoginPage()
  const registrationPage = new RegistrationPage()

  loginPage.getRegisterButton().click()
  registrationPage.getFirstName().type(FirstName)
  registrationPage.getLastName().type(LastName)
  registrationPage.getUsername().type(Username)
  registrationPage.getPassword().type(Password)
  registrationPage.getRegisterButton().click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
