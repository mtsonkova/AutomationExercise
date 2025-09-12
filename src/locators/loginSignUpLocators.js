export const LoginSignUpLocators = (page) => ({
loginForm: {
    email: page.locator('[data-qa="login-email"]'),
    password: page.locator('[data-qa="login-password"]'),
    loginBtn: page.locator('[data-qa="login-button"]'),
    errorMsg: page.locator('div.login-form p'),
},

registerForm: {
    name: page.locator('[data-qa="signup-name"]'),
    email: page.locator('[data-qa="signup-email"]'),
    signUpBtn: page.locator('[data-qa="signup-button"]'),
}

})