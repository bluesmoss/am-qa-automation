import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'

class ProductsPage {
    constructor(){
        this.container = Selector('.inventory_container')
        this.btnAddToCart = Selector('.btn_primary.btn_inventory').withExactText('ADD TO CART');
    }

    async verifyLocation() {
        await t
            .expect(HeaderPage.container.exists).ok()
            .expect(this.container.exists).ok()
    }

    async addItem() {
        await t
            .click(this.btnAddToCart)
    }
}

export default new ProductsPage()