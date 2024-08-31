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

    it('Info user update', () => {

      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.dashboardPage()
      menuPage.accessMyInfo()
      myInfo.fillPersonalDetails("bruno", "luiz")
      myInfo.fillEmployee()
      myInfo.fillNationality()
      myInfo.subimitButton()
      
    })

    it('login-Fail', () => {

      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
      

  })
})