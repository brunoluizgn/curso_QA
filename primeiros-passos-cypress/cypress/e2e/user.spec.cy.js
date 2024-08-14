import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
      
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      generiField: ".oxd-input--active",
      genericCombobox: ".oxd-select-text-input",
      secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
      thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
      dataField: "[placeholder='yyyy-dd-mm']",
      saveButton: ".oxd-button"
    }

    it.only('Info user update', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.location()


      
      // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      // cy.get(selectorsList.dashboardGrid)
      // cy.get(selectorsList.myInfoButton).click()
      // cy.get(selectorsList.firstNameField).clear().type('FirstNTest')
      // cy.get(selectorsList.lastNameField).clear().type('LastNTest')
      // cy.get(selectorsList.generiField).eq(3).clear().type('Employ')
      // cy.get(selectorsList.generiField).eq(4).clear().type('OtherIdTest')
      // cy.get(selectorsList.generiField).eq(5).clear().type('DriverTest')
      // cy.get(selectorsList.dataField).eq(0).clear().type('2025-03-10')
      // cy.get(selectorsList.saveButton).eq(0).click()
      // cy.get('body').should('contain', 'Successfully Updated')
      // cy.get(selectorsList.genericCombobox).eq(0).click()
      // cy.get(selectorsList.secondItemCombobox).click()  
      // cy.get(selectorsList.genericCombobox).eq(1).click() 
      // cy.get(selectorsList.thirdItemCombobox).click()
      // cy.get(selectorsList.saveButton).eq(0).click()
      // cy.get('body').should('contain', 'Successfully Updated')
        
    })

    it('login-Fail', () => {

      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  })
})