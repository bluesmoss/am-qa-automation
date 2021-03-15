import dotenv from 'dotenv'
dotenv.config()


export const SITE = {
    MAIN_URL : process.env.SITE_URL,
}

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.VALID_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD,
    },
    INVALID_USER: {
        USERNAME: 'invalid_username',
        PASSWORD: 'invalid_password'
    },
    PERFORMANCE_GLITCH_USER: {
        USERNAME: process.env.PERFORMANCE_GLITCH_USERNAME,
        PASSWORD: process.env.VALID_PASSWORD
    }
}

export const PRODUCT = {
    SINGLE_ITEM: 1,
    TOTAL_MULTIPLE_ITEMS: 6,
    EMPTY: 0
}

export const USER = {
    FIRST_NAME: process.env.USER_FIRST_NAME,
    LAST_NAME: process.env.USER_LAST_NAME,
    ZIP_CODE: process.env.USER_ZIP_CODE,
}