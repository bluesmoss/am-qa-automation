import { Selector } from 'testcafe'

class HeaderPage {
    constructor(){
        this.container = Selector('.header_container')
        this.btnBurger = Selector('.bm-burger-button button').withExactText('Open Menu');
        this.btnCart = Selector('.shopping_cart_link svg[data-icon="shopping-cart"]');
    }
}

export default new HeaderPage()