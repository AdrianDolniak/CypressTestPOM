export default class LoginPage {

  getGreets() {
    return cy.contains('h2', 'Login')
  }
  
  getRegisterLink() {
    return cy.contains('Register')
  }

  getUsername() {
    return cy.get('#username');
  }

  getPassword() {
    return cy.get('#password');
  }

  getLoginButton() {
    return cy.get('button[type=submit]');
  }

  getRegisterButton() {
    return cy.get('.btn.btn-link');
  }

  getHash() {
    return cy.hash();
  }

  getErrorMessage() {
    return cy.get('.form-group.has-error > span')
  }

  getAlertMessage() {
    return cy.get('.alert.alert-danger')
  }
}
