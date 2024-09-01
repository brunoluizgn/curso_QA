import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {

    it('login-Fail', () => {

      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
      
  })

    it('login-Success', () => {

      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

})

})

  