import {LoginSignUpLocators} from '../locators/loginSignUpLocators';
import { HomePage } from './homePage';
import {expect} from '@playwright/test';

export class LoginSignUpPage extends HomePage{
    constructor(page) {
        super(page);
        this.page = page;
        this.loginSignUpLocators = LoginSignUpLocators(page);
        this.homePage = new HomePage(page)
    };

     async login(userEmail, pass) {
        await this.homePageLocators.mainMenu.signupLogin.click();
        await this.loginSignupLocators.loginForm.email.fill(userEmail);
        await this.loginSignupLocators.loginForm.password.fill(pass);
        await this.loginSignupLocators.loginForm.loginBtn.click();
    }

    async checkLoginState(){
        await expect(this.homePageLocators.mainMenu.signupLogin).not.toBeVisible();
        await expect(this.homePageLocators.mainMenu.logout).toBeVisible();
    }
 
    async getWrongCredentialsError() {
        return this.loginSignupLocators.loginForm.errorMsg.textContent();
    }

    async goToRegistrationForm(fullName, userEmail) {
        await this.loginSignUpLocators.registerForm.name.fill(fullName);
        await this.loginSignUpLocators.registerForm.email.fill(userEmail);
        await this.loginSignUpLocators.registerForm.signUpBtn.click();
}
async getEmailExistsErrMsg() {
    return this.loginSignUpLocators.registerForm.errorMsg.textContent();
}
}