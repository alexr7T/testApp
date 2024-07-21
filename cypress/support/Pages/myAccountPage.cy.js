export class MyAccountPage {

    clickOnCategories() {
        cy.get('.nav-item.dropdown')
            .find('a[data-test="nav-categories"]')
            .click()

        cy.get('.nav-item.dropdown')
            .should('be.visible')
            .find('li')
            .first()
            .click()
    }

    clickOnNavBarButton() {
        cy.wait(1000)
        cy.get('.navbar-brand').click()
    }

}

export const myAccountPage = new MyAccountPage()

