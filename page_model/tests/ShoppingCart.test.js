import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { CREDENTIALS, SITE }  from '../data/Constants'
import { SCENARIO, FEATURE }  from '../data/Messages'

fixture(FEATURE.SHOPPING_CART)
    .page `${SITE.MAIN_URL}`
    .beforeEach(async t  => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test(SCENARIO.NAVIGATE_SHOPPING_CART, async t => {
    await t
        .click(HeaderPage.btnCart)
        ShoppingCartPage.verifyLocation();
})
