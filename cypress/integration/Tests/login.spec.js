/// <reference types="Cypress" />
import LoginPage from '../../support/PageObjects/LoginPage'
import RegistrationPage from '../../support/PageObjects/RegistrationPage'

describe('/login', () => {
  // Creat an object for PageObject Page Class and assign it to a constant variable
  const loginPage = new LoginPage()
  const registrationPage = new RegistrationPage()

  // Define variable for the data
  let userData

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      userData = data;

      cy.visit('login')
    })
  })

  it('greets with Login', () => {
    loginPage.getGreets()
  })

  it('links to #/register', () => {
    loginPage.getRegisterLink()
      .should('have.attr', 'href', '#/register')
  })

  it('requires username', () => {
    loginPage.getUsername().type(userData.Username)
      .clear()
    loginPage.getErrorMessage()
      .should('contain', 'Username is required')
  })

  it('requires password', () => {
    loginPage.getPassword().type(userData.Password)
      .clear()
    loginPage.getErrorMessage()
      .should('contain', 'Password is required')
  })

  it('requires valid username and password', () => {
    loginPage.getUsername().type(userData.WrongUsername)
      .should('have.value', userData.WrongUsername)
    loginPage.getPassword().type(userData.wrongPassword)
      .should('have.value', userData.wrongPassword)
    loginPage.getLoginButton().click()
    loginPage.getAlertMessage()
      .should('contain', 'Username or password is incorrect')
  })

  it('navigates to #/ on successful login after registration', () => {
    cy.registration(userData.FirstName, userData.LastName, userData.Username, userData.Password)
    loginPage.getHash()
      .should('eq', '#/login')
    loginPage.getUsername().type(userData.Username)
      .should('have.value', userData.Username)
    loginPage.getPassword().type(userData.Password)
      .should('have.value', userData.Password)
    loginPage.getLoginButton().click()
    loginPage.getHash()
      .should('eq', '#/')
  })
})