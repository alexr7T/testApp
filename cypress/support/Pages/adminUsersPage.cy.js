export class AdminUsersPage {

    validateCreationOfTheLastUserWithASpecificFirstWord() {
        cy.get('table tr').last().within(() => {
            cy.get('td').eq(2)
              .invoke('text')
              .then((email) => {
                email = email.trim();
                expect(email.startsWith('testbrown')).to.be.true;
              });
          });
    }

}

export const onAdminUsersPage = new AdminUsersPage()