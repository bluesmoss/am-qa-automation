import { Selector, t } from 'testcafe'

class InformationPage {
    constructor(){
        this.firstName = Selector('#first-name');
        this.lastName = Selector('#last-name');
        this.zipCode = Selector('#postal-code');
        this.btnCancel = Selector('cart_cancel_link.btn_secondary');
        this.btnContinue = Selector('input[value="CONTINUE"]');
        this.errorMessage = Selector('h3[data-test="error"]');
    }

    async fillUserInformation(firstName, lastName, zipCode) {
        await t
            .typeText(this.firstName, firstName)
            .typeText(this.lastName, lastName)
            .typeText(this.zipCode, zipCode)
            .click(this.btnContinue)
    }

}

export default new InformationPage()