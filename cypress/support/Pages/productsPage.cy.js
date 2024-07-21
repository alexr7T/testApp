export class OnProductsPage {

    productNameAndPriceAssertion() {
        cy.get('[data-test="product-name"]').should('be.visible')
        cy.get('[data-test="product-price"]').should('exist')
    }

    sortProducts() {
        cy.wait(2000)
        cy.get('[data-test="sort"]').select(1).invoke('val').should('eq', 'name,desc') //actually fails here as the value would be 'name,asc'

        cy.get('[data-test="sorting_completed"]')
            .first() 
            .find('[data-test="product-13"]') 
            .invoke('text') 
            .then((text) => {
                const firstChar = text.trim().charAt(0).toUpperCase();
                expect(firstChar).to.equal('A'); 
            });
    }

    checkboxCategoryHammer() {
        cy.get('[data-test="category-3"]').first().check()
        cy.get('[data-test="product-name"]').should('contain', 'Hammer')
    }

    selectBoltCuttersProduct() {
        cy.get('.card').eq(2).click()
    }

}

export const onProductsPage = new OnProductsPage()