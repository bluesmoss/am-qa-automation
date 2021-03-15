import ShoppingCartPage from '../pages/ShoppingCartPage' 
import InformationPage from '../pages/InformationPage'
import SummaryPage from '../pages/SummaryPage'
import { SITE, PRODUCT, USER }  from '../data/Constants'
import { SCENARIO, FEATURE }  from '../data/Messages'

fixture(FEATURE.INFORMATION)
    .page `${SITE.MAIN_URL}`
    .beforeEach(async t  => {
        await ShoppingCartPage.addItemsAndCheckout(PRODUCT.TOTAL_MULTIPLE_ITEMS);
    })

test(SCENARIO.MISSING_INFORMATION, async t => {
    await t
        .click(InformationPage.btnContinue)
        .expect(InformationPage.errorMessage.exists).ok()
})

test(SCENARIO.FILL_USER_INFORMATION, async t => {
    await InformationPage.fillUserInformation(USER.FIRST_NAME, USER.LAST_NAME, USER.ZIP_CODE);
    await t
        .expect(SummaryPage.container.exists).ok()
        .expect(SummaryPage.btnFinish.exists).ok()
})