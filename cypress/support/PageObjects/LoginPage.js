class LoginPage {

getUsername(){
    return cy.get('#username');
}

getPassword(){
    return cy.get('#password');
}

getLoginButton() {
    return cy.get('button[type=submit]');
}

getRegisterButton() {
    return cy.get('.btn.btn-link');
}

}
export default LoginPage