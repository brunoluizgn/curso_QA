import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new MyInfo()

describe('Orange HRM Tests', () => {

    const selectorsList = {
      
      
    }

    it.only('Info user update', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.dashboardPage()
      menuPage.accessMyInfo()
      myInfo.fillPersonalDetails("bruno", "luiz")
      myInfo.fillEmployee()
      myInfo.fillNationality()
      
    })

    it('login-Fail', () => {

      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  })
})