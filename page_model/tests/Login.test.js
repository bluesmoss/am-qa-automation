import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import MenuPage from '../pages/MenuPage'
import { CREDENTIALS, SITE }  from '../data/Constants'
import { SCENARIO, ERROR, FEATURE }  from '../data/Messages'

fixture(FEATURE.LOGIN)
    .page `${SITE.MAIN_URL}`

test(SCENARIO.L0GIN_VALID_USER, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.verifyLocation()
})

test(SCENARIO.LOGIN_INVALID, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await LoginPage.verifyErrorMessage(ERROR.INVALID_CREDENTIALS)
})

test(SCENARIO.LOGOUT_VALID, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.verifyLocation()
    await MenuPage.logout();
    await LoginPage.verifyLocation()
})

