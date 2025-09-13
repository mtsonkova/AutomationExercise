export const LoginSignUpLocators = (page) => ({
loginForm: {
    loginTitle:page.locator('div.login-form h2'),
    email: page.locator('[data-qa="login-email"]'),
    password: page.locator('[data-qa="login-password"]'),
    loginBtn: page.locator('[data-qa="login-button"]'),
    errorMsg: page.locator('div.login-form p'),
},

registerForm: {
    registerTitle: page.locator('div.signup-form h2'),
    name: page.locator('[data-qa="signup-name"]'),
    email: page.locator('[data-qa="signup-email"]'),
    signUpBtn: page.locator('[data-qa="signup-button"]'),
    errorMsg: page.locator('div.signup-form p'),
}

})