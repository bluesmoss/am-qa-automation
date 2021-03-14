import LoginPage from '../pages/LoginPage'
import HeaderPage from '../pages/HeaderPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS, SITE }  from '../data/Constants'
import { SCENARIO, ERROR, FEATURE }  from '../data/Messages'

fixture(FEATURE.LOGIN)
    .page `${SITE.MAIN_URL}`

test(SCENARIO.L0GIN_VALID_USER, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(HeaderPage.container.exists).ok()
    await t.expect(ProductsPage.container.exists).ok()
    
})

test(SCENARIO.LOGIN_INVALID, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql(ERROR.INVALID_CREDENTIALS)
})
