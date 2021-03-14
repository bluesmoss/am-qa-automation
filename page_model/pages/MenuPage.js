import { Selector } from 'testcafe'

class MenuPage {
    constructor(){
        this.btnCloseMenu = Selector('.bm-cross-button button').withExactText('Close Menu');
        this.btnLogout = Selector('#logout_sidebar_link');
        //this.btnLogout = Selector('.bm-item.menu-item').withExactText('Logout');
    }
}

export default new MenuPage()