import loginPage from "../loginPage";
import loginData from "../loginData.json";

describe('Scenario Login Sauce Demo', () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('successLogin', () => {
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.login_btn()
        loginPage.verifyLoginSuccess()
    })

    it('failedLogin - invalidUsername', () => {
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.login_btn()
        loginPage.verifyUsernamePasswordError()
    })
})
