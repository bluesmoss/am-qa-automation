import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'

class ProductsPage {
    constructor(){
        this.container = Selector('.inventory_container')
    }

    async verifyLocation() {
        await t
            .expect(HeaderPage.container.exists).ok()
            .expect(this.container.exists).ok()
    }
}

export default new ProductsPage()