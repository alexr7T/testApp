export class CheckoutPage {

    checkoutFullProcess(state, country, accountName, accountNumber) {
        cy.wait(2000)
        cy.get('[data-test="proceed-1"]').click()
        cy.wait(2000)
        cy.get('[data-test="proceed-2"]').click()
        cy.wait(2000)
        cy.get('#state').type(state)
        cy.get('#country').type(country)
        cy.get('[data-test="proceed-3"]').click()
        cy.get('select').select('Bank Transfer').should('value', '2: Bank Transfer')
        cy.get('#account-name').type(accountName)
        cy.get('#account-number').type(accountNumber)
        cy.get('[data-test="finish"]').click()
        cy.get('.alert').should('contain', 'Payment was successful')
    }

}

export const onCheckoutPage = new CheckoutPage()