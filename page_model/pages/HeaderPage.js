import { Selector, t} from 'testcafe'
import { PRODUCT }  from '../data/Constants'

class HeaderPage {
    constructor(){
        this.container = Selector('.header_container')
        this.btnBurger = Selector('.bm-burger-button button').withExactText('Open Menu');
        this.btnCart = Selector('.shopping_cart_link svg[data-icon="shopping-cart"]');
        this.shoppingBadge = Selector('.shopping_cart_badge')
    }

    async validateAddedItem(totalItems) {
        const currentTotal = await this.shoppingBadge.innerText;
        await t
            .expect(this.shoppingBadge.exists).ok()
            .expect(Number(currentTotal)).eql(totalItems)
    }

    async verifyCartNotEmpty() {
        const currentTotal = await this.shoppingBadge.innerText;
        await t
            .expect(this.shoppingBadge.exists).ok()
            .expect(Number(currentTotal)).gte(PRODUCT.EMPTY)
    }
}

export default new HeaderPage()