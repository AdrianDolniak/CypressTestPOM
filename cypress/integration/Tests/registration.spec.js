/// <reference types="Cypress" />
import RegistrationPage from '../../support/PageObjects/RegistrationPage'

describe('/registration', () => {
  // Creat an object for PageObject Page Class and assign it to a constant variable
  const registrationPage = new RegistrationPage()

  // Define variable for the data
  let userData

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      userData = data;

      cy.visit('register')
    })
  })

  it('greets with Register', () => {
    registrationPage.getGreets()
  })

  it('links to #/login', () => {
    registrationPage.getLoginLink()
      .should('have.attr', 'href', '#/login')
  })

  it('navigates to #/login after cancel registration', () => {
    registrationPage.getCancelButton().click()
    registrationPage.getHash()
      .should('eq', '#/login')
  })

  it('navigates to #/login on successful registration', () => {
    registrationPage.getFirstName().type(userData.FirstName)
      .should('have.value', userData.FirstName)
    registrationPage.getLastName().type(userData.LastName)
      .should('have.value', userData.LastName)
    registrationPage.getUsername().type(userData.Username)
      .should('have.value', userData.Username)
    registrationPage.getPassword().type(userData.Password)
      .should('have.value', userData.Password)
    registrationPage.getRegisterButton().click()
    registrationPage.getAlertMessage()
      .should('contain', 'Registration successful')
    registrationPage.getHash()
      .should('eq', '#/login')
  })
})