import dotenv from 'dotenv'
dotenv.config()

export const FEATURE = {
    LOGIN:  `${process.env.SITE_NAME}: Login feature testing`,
    SHOPPING_CART:  `${process.env.SITE_NAME}: Shopping cart feature testing`,
    INFORMATION:  `${process.env.SITE_NAME}: Information feature testing`,
    SUMMARY:  `${process.env.SITE_NAME}: Summary feature testing`,
}

export const SCENARIO = {
    L0GIN_VALID_USER: '1. Login with a valid user',
    LOGIN_INVALID: '2. Login with an invalid user',
    LOGOUT_VALID: '3. Logout from products page',
    NAVIGATE_SHOPPING_CART: '4. Navigate to shopping cart',
    ADD_ITEM_TO_CART: '5. Add a single item to the shopping cart',
    ADD_MULTIPLE_ITEMS_TO_CART: '6. Add multiple items to the shopping cart',
    MISSING_INFORMATION: '7. Continue with missing information',
    FILL_USER_INFORMATION: '8. Fill users information',
    FINAL_ORDER: '9. Final order items',
    COMPLETE_PURCHASE: '10. Complete purchase',
}