import { ClientFunction } from 'testcafe';
import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import InformationPage from '../pages/InformationPage'
import SummaryPage from '../pages/SummaryPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'
import { CREDENTIALS, SITE, PRODUCT, USER}  from '../data/Constants'
import { SCENARIO, FEATURE }  from '../data/Messages'


const getItems = ClientFunction(() => {
    const items      = document.querySelector('.cart_list');
    const itemsTotal  = items.querySelectorAll('.cart_item').length;
    const itemName     = items.querySelectorAll('.inventory_item_name');
    const itemPrice = items.querySelectorAll('.inventory_item_price');
    const EMPTY = 0;
    const currentItems = [];

    for (let counterItems = EMPTY; counterItems < itemsTotal; counterItems++) {
        let originalPrice = itemPrice[counterItems].textContent
        let singlePrice = originalPrice.replace("$", "");
        currentItems.push({
            name: itemName[counterItems].textContent,
            price: singlePrice
        });
    }
    return currentItems;
});

fixture(FEATURE.SUMMARY)
    .page `${SITE.MAIN_URL}`
    .beforeEach(async t  => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

    test(SCENARIO.FINAL_ORDER, async t => {
        await ProductsPage.addItemsToCart(PRODUCT.TOTAL_MULTIPLE_ITEMS);
        await t
            .click(HeaderPage.btnCart)
        const itemsAddedToCart = await getItems();
        await t
            .expect(ShoppingCartPage.btnCheckout.exists).ok()
            .click(ShoppingCartPage.btnCheckout)
        await InformationPage.fillUserInformation(USER.FIRST_NAME, USER.LAST_NAME, USER.ZIP_CODE);
        await t
            .expect(InformationPage.errorMessage.exists).notOk()
            .expect(SummaryPage.container.exists).ok()
            .expect(SummaryPage.btnFinish.exists).ok()
        const itemsInFinalOrder = await getItems();
        await t
            .expect(itemsAddedToCart).eql(itemsInFinalOrder)
    })

    test(SCENARIO.COMPLETE_PURCHASE, async t => {
        await ProductsPage.addItemsToCart(PRODUCT.TOTAL_MULTIPLE_ITEMS);
        await t
            .click(HeaderPage.btnCart)
        const itemsAddedToCart = await getItems();
        await t
            .expect(ShoppingCartPage.btnCheckout.exists).ok()
            .click(ShoppingCartPage.btnCheckout)
        await InformationPage.fillUserInformation(USER.FIRST_NAME, USER.LAST_NAME, USER.ZIP_CODE);
        await t
            .expect(InformationPage.errorMessage.exists).notOk()
            .expect(SummaryPage.container.exists).ok()
            .expect(SummaryPage.btnFinish.exists).ok()
        const itemsInFinalOrder = await getItems();
        await t
            .expect(itemsAddedToCart).eql(itemsInFinalOrder)
            .click(SummaryPage.btnFinish)
        await CheckoutCompletePage.verifyPurchaseCompleted()
    })
