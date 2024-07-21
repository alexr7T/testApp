export class LoginProcess {


    loginIntoAccount(email, password) {
        cy.get('[data-test="login-form"]').within(() => {
            cy.get('#email').type(email) 
            cy.get('#password').type(password) 
            cy.get('[data-test="login-submit"]').click()
        })
    }

}

export const loginProcess = new LoginProcess()