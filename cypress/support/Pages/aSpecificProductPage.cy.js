export class AspecificProductPage {

    clickOnFavoritesButton() {
        cy.get('#btn-add-to-favorites').click()
        cy.get('.toast-body').should('contain', 'Added to favorites list')
    }

    clickOnAddToCartButton() {
        cy.get('#btn-add-to-cart').click({force: true})
        cy.get('[data-test="cart-quantity"]').should('contain', '1')
    }

    clickOnCartButton() {
        cy.get('[data-test="nav-cart"]').click()
    }

}

export const onASpecificProductPage = new AspecificProductPage()