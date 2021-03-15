import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'

class InformationPage {
    constructor(){
        this.firstName = Selector('#first-name');
        this.LastName = Selector('#last-name');
        this.ZipCode = Selector('#postal-code');
        this.btcCancel = Selector('cart_cancel_link.btn_secondary');
        this.btcContinue = Selector('input[value="CONTINUE"]');
        this.errorMessage = Selector('h3[data-test="error"]');
    }

}

export default new InformationPage()