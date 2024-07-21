/// <reference types="cypress" />

import { loginProcess } from "../support/Pages/loginProcess.cy"
import { myAccountPage } from "../support/Pages/myAccountPage.cy"
import { onProductsPage } from "../support/Pages/productsPage.cy"
import { onASpecificProductPage } from "../support/Pages/aSpecificProductPage.cy"
import { createAccountPage } from "../support/Pages/createAccount.cy"
import { onUserDropdown } from "../support/Pages/userDropdown.cy"
import { onAdminUsersPage } from "../support/Pages/adminUsersPage.cy"
import { onCheckoutPage } from "../support/Pages/checkoutPage.cy"

describe('Front End tests', () => {

    describe('Register', () => {

        before('Reach register page', () => {
            cy.visit('https://with-bugs.practicesoftwaretesting.com/#/')
            cy.get('[data-test="nav-sign-in"]').click()
            cy.get('[data-test="register-link"]').click()
        })

        it('Create account', () => {
            createAccountPage.createNewAccount(
                'Micheal',
                'Brown',
                '1994-01-19',
                'Long Island 04 Street',
                '1234',
                'Frankfurt',
                'NY',
                'DE',
                '8295823',
                'nvgsr1491A?'
            )
            loginProcess.loginIntoAccount('admin@practicesoftwaretesting.com', 'welcome01')
            onUserDropdown.userDropdownMenu()
            onAdminUsersPage.validateCreationOfTheLastUserWithASpecificFirstWord()
        })
        
    })

    describe('Tests with Valid Account', () => {

        beforeEach('Reach homepage and pass login process', () => {
            cy.visit('https://with-bugs.practicesoftwaretesting.com/#/')
            cy.get('[data-test="nav-sign-in"]').click()
            loginProcess.loginIntoAccount('customer@practicesoftwaretesting.com', 'welcome01')
        })
    
        it('View Available Products and Prices from Categories', () => {
            cy.wait(2000)
            myAccountPage.clickOnCategories()
            onProductsPage.productNameAndPriceAssertion()
        })
    
        it('View Available Products and Prices from Navbar Brand', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.productNameAndPriceAssertion()
    
        })
    
        it('Sort Products from A to Z', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.sortProducts()
        })
    
        it('Filter Products by Category', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.checkboxCategoryHammer()
    
        })
    
        it('Add Product to Favourites', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.selectBoltCuttersProduct()
            onASpecificProductPage.clickOnFavoritesButton()
        })
    
        it('View Product in Cart', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.selectBoltCuttersProduct()
            onASpecificProductPage.clickOnAddToCartButton()
        })

        it('Complete Purchase', () => {
            myAccountPage.clickOnNavBarButton()
            onProductsPage.selectBoltCuttersProduct()
            onASpecificProductPage.clickOnAddToCartButton()
            onASpecificProductPage.clickOnCartButton()
            onCheckoutPage.checkoutFullProcess('NY', 'Germany', 'Micheal', '31231231')

        })

    })

    



})