import { HomePageLocators } from '../locators/homePageLocators';
import {expect} from '@playwright/test';
export class HomePage{
    constructor(page) {
        this.page = page;
        this.homePageLocators = HomePageLocators(page);
    }

    async getLoggedInUserName() {
        //await this.homePageLocators.mainMenu.loggedInAs.click();
        return await this.homePageLocators.mainMenu.loggedInAs.textContent();
    } 

  

    async logout() {
        await this.homePageLocators.mainMenu.logout.click();        
    }

    async checkLogoutState() {
        await expect(this.homePageLocators.mainMenu.signupLogin).toBeVisible();
        await expect(this.homePageLocators.mainMenu.logout).not.toBeVisible();
    }
}