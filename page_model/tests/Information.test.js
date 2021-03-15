import ShoppingCartPage from '../pages/ShoppingCartPage' 
import InformationPage from '../pages/InformationPage'
import { SITE, PRODUCT }  from '../data/Constants'
import { SCENARIO, FEATURE, ERROR }  from '../data/Messages'

fixture(FEATURE.INFORMATION)
    .page `${SITE.MAIN_URL}`
    .beforeEach(async t  => {
        await ShoppingCartPage.addItemsAndCheckout(PRODUCT.TOTAL_MULTIPLE_ITEMS);
    })

test(SCENARIO.MISSING_INFORMATION, async t => {
    await t
        .click(InformationPage.btcContinue)
        .expect(InformationPage.errorMessage.exists).ok()
})