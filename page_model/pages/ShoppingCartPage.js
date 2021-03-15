import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'

class ShoppingCartPage {
    constructor(){
        this.container = Selector('.cart_contents_container');
        this.cartList = Selector('.cart_list');
        this.btnCheckout = Selector('.btn_action.checkout_button');
    }

    async verifyLocation() {
        await t
            .expect(HeaderPage.container.exists).ok()
            .expect(this.container.exists).ok()
            .expect(this.cartList.exists).ok()
    }

}

export default new ShoppingCartPage()