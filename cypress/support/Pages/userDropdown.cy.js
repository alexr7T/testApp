export class UserDropdown {

    userDropdownMenu() {
        cy.get('[data-test="nav-admin-menu"]').click()
        cy.get('[data-test="nav-admin-users"]').click()
    }

    

}

export const onUserDropdown = new UserDropdown()

