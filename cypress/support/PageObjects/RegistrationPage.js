class RegistrationPage {

getFirstName() {
    return cy.get('#firstName');
}

getLastName(){
    return cy.get('#Text1');
}

getUsername(){
    return cy.get('#username');
}

getPassword(){
    return cy.get('#password');
}

getRegisterButton() {
    return cy.get('button[type=submit]');
}

getCancelButton() {
    return cy.get('.btn.btn-link');
}

}
export default RegistrationPage