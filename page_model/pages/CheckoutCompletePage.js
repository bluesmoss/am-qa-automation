import { Selector, t } from 'testcafe'

class CheckoutCompletePage {
    constructor(){
        this.headerOrderFinished = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER');
        this.imagePonyExpress = Selector('.pony_express');
    }

    async verifyPurchaseCompleted() {
        await t
            .expect(this.headerOrderFinished.exists).ok()
            .expect(this.imagePonyExpress.exists).ok()
    }

}

export default new CheckoutCompletePage()