import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.userNameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('input[value="LOGIN"]')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    async submitLoginForm(username, password) {
        await t
            .typeText(this.userNameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton)
    }

    async verifyLocation() {
        await t
            .expect(this.userNameField.exists).ok()
            .expect(this.passwordField.exists).ok()
            .expect(this.loginButton.exists).ok()
    }
    
    async verifyErrorMessage() {
        await t
            .expect(this.errorMessage.exists).ok()
    }
}

export default new LoginPage()