import dotenv from 'dotenv'
dotenv.config()

export const FEATURE = {
    LOGIN:  `${process.env.SITE_NAME}: Login feature testing`,
    SHOPPING_CART:  `${process.env.SITE_NAME}: Shopping cart feature testing`,
}

export const SCENARIO = {
    L0GIN_VALID_USER: '1. Login with a valid user',
    LOGIN_INVALID: '2. Login with an invalid user',
    LOGOUT_VALID: '3. Logout from products page',
    NAVIGATE_SHOPPING_CART: '4. Navigate to shopping cart',
}

export const ERROR = {
    INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service',
}