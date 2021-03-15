import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'
import { PRODUCT }  from '../data/Constants'

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

    async addItemsToCart(totalItems) {
        for (let itemsCounter = PRODUCT.EMPTY; itemsCounter < totalItems; itemsCounter++) {
            await this.addItem();
        }
        await HeaderPage.verifyCartNotEmpty();
        await HeaderPage.validateAddedItem(totalItems);
    }
}

export default new ProductsPage()