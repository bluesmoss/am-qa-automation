import { Selector, t } from 'testcafe'

class SummaryPage {
    constructor(){
        this.container = Selector('.checkout_summary_container');
        this.btnFinish = Selector('.btn_action.cart_button').withExactText('FINISH');
    }
}

export default new SummaryPage()