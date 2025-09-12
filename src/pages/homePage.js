import { HomePageLocators } from "../locators/homePageLocators";
export class HomePage{
    constructor(page) {
        this.page = page;
        this.homePageLocators = HomePageLocators(page);
    }

    async getLoggedInUserName() {
        return loggedInUserName = await this.homePageLocators.mainMenu.loggedInAs.textContent();
    } 

    async checkLogoutVisibiliy() {
        return this.homePageLocators.mainMenu.logout.isVisible();
    }

    async checkLoginRegisterVisibility() {
        return this.homePageLocators.mainMenu.signupLogin.isVisible();
    }

    async logout() {
        await this.homePageLocators.mainMenu.logout.click();
    }
}