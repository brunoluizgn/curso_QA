import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfo = new MyInfo()

describe('Orange HRM Tests', () => {

    it('Info user update', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      dashboardPage.dashboardPage()
      menuPage.accessMyInfo()
      myInfo.fillPersonalDetails(chance.first(), chance.last())
      myInfo.fillEmployee("Employ", "OtherIdTest", "DriverTest", "2025-03-10")
      myInfo.fillNationality()
      myInfo.subimitButton()
    })

})