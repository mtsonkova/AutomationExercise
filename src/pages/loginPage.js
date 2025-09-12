import {LoginSignUpLocators} from '../locators/loginSignUpLocators';
import { HomePage } from '../pages/homePage';
import {expect} from '@playwright/test';

export class LoginPage extends HomePage{
    constructor(page) {
        super(page);
        this.page = page;
        this.loginSignupLocators = LoginSignUpLocators(page);
        this.homePage = new HomePage(page)
    };

     async login(userEmail, pass) {
        await this.homePageLocators.mainMenu.signupLogin.click();
        await this.loginSignupLocators.loginForm.email.fill(userEmail);
        await this.loginSignupLocators.loginForm.password.fill(pass);
        await this.loginSignupLocators.loginForm.loginBtn.click();
    }

    async getWrongCredentialsError() {
        return this.loginSignupLocators.loginForm.errorMsg.textContent();
    }
}