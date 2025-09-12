export const LoginSignUpLocators = (page) => ({
loginForm: {
    email: page.locator('[data-qa="login-email"]'),
    password: page.locator('[data-qa="login-password"]'),
    loginBtn: page.locator('[data-qa="login-button"]'),
},

registerForm: {
    name: page.locator('[data-qa="signup-name"]'),
    email: page.locator('[data-qa="signup-email"]'),
    signUpBtn: page.locator('[data-qa="signup-button"]'),
}

})