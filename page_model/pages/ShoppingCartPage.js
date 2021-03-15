import { Selector, t } from 'testcafe'
import { CREDENTIALS }  from '../data/Constants'
import  HeaderPage  from './HeaderPage'
import  LoginPage  from './LoginPage'
import  ProductsPage  from './ProductsPage'

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

    async addItemsAndCheckout(totalItems) {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.addItemsToCart(totalItems);
        await t
            .click(HeaderPage.btnCart)
            .expect(this.btnCheckout.exists).ok()
            .click(this.btnCheckout)
    }

}

export default new ShoppingCartPage()