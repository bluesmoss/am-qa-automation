import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import MenuPage from '../pages/MenuPage'
import { Role } from 'testcafe'
import { CREDENTIALS, SITE }  from '../data/Constants'
import { SCENARIO, FEATURE }  from '../data/Messages'


const regularUser = Role(SITE.MAIN_URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
});

const performanceGlitchUser = Role(SITE.MAIN_URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.PERFORMANCE_GLITCH_USER.USERNAME, CREDENTIALS.PERFORMANCE_GLITCH_USER.PASSWORD)
});

fixture(FEATURE.LOGIN)
    .page `${SITE.MAIN_URL}`

test(SCENARIO.L0GIN_VALID_USER, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.verifyLocation()
})

test(SCENARIO.BONUS.ROLE_STANDARD, async t => {
    await t
        .useRole(regularUser)
        ProductsPage.verifyLocation()
})


test(SCENARIO.BONUS.ROLE_PERFORMANCE_GLITCH, async t => {
    await t
        .useRole(performanceGlitchUser)
        ProductsPage.verifyLocation()
})

test(SCENARIO.LOGIN_INVALID, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await LoginPage.verifyErrorMessage()
})

test(SCENARIO.LOGOUT_VALID, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.verifyLocation()
    await MenuPage.logout();
    await LoginPage.verifyLocation()
})

