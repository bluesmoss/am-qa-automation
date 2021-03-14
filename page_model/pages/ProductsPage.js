import { Selector } from 'testcafe'

class ProductsPage {
    constructor(){
        this.container = Selector('.inventory_container')
    }
}

export default new ProductsPage()