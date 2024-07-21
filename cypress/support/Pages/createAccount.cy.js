export class CreateAccount {

    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 11)
        return `testbrown${randomString}@gmail.com`
    }
    
    createNewAccount(firstName, lastName, dateOfBirth, address, postcode, city, state, country, phone, password) {
        
        const email = this.generateRandomEmail()
        
        cy.get('[formcontrolname="first_name"]').type(firstName)
        cy.get('[formcontrolname="last_name"]').type(lastName)
        cy.get('[data-test="dob"]').type(dateOfBirth)
        cy.get('[formcontrolname="address"]').type(address)
        cy.get('[formcontrolname="postcode"]').type(postcode)
        cy.get('[formcontrolname="city"]').type(city)
        cy.get('[formcontrolname="state"]').type(state)
        cy.get('[formcontrolname="country"]').select(country)
        cy.get('[formcontrolname="phone"]').type(phone)
        cy.get('[formcontrolname="email"]').type(email)
        cy.get('[formcontrolname="password"]').type(password)
        cy.get('[data-test="register-submit"]').click()
    }

}

export const createAccountPage = new CreateAccount()