export default class RegistrationPage {

  getGreets() {
    return cy.contains('h2', 'Register')
  }
  
  getLoginLink() {
    return cy.contains('Cancel')
  }

  getFirstName() {
    return cy.get('#firstName');
  }

  getLastName() {
    return cy.get('#Text1');
  }

  getUsername() {
    return cy.get('#username');
  }

  getPassword() {
    return cy.get('#password');
  }

  getRegisterButton() {
    return cy.get('button[type=submit]');
  }

  getCancelButton() {
    return cy.get('.btn.btn-link');
  }

  getHash() {
    return cy.hash();
  }

  getAlertMessage() {
    return cy.get('.alert.alert-success')
  }
}
