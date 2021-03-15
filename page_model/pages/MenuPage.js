import { Selector, t } from 'testcafe'
import  HeaderPage  from './HeaderPage'

class MenuPage {
    constructor(){
        this.btnCloseMenu = Selector('.bm-cross-button button').withExactText('Close Menu');
        this.btnLogout = Selector('#logout_sidebar_link');
        //this.btnLogout = Selector('.bm-item.menu-item').withExactText('Logout');
    }

    async logout() {
        await t
            .click(HeaderPage.btnBurger)
            .click(this.btnLogout)
    }
}

export default new MenuPage()