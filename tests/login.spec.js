import {defaultUser, testUser, defaultPassword, defaultTitle, dateOfBirth, addressInformation} from '../src/utils/testData';
import { generateRandomEmail } from '..src/utils/emailUtils';
import { HomePageLocators } from '../src/locators/homePageLocators';
import { LoginPage } from '../src/pages/loginPage';
import { HomePage } from '../src/pages/homePage';

import {test, expect} from '@playwright/test';

test.describe('Login and log out functionality', () => {
let email;
let loginPage;
let homePage;
let homePageLocators;

test.beforeEach('Initial setup', async({page}) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    homePageLocators = HomePageLocators(page);
});

test('Login with valid credentials and log out', async() => {
    await test.step('Lotin with valid credentials', async() => {
         await loginPage.login(defaultUser.email, defaultPassword);
        let loggedInUserData = await homePage.getLoggedInUserName();
        expect(loggedInUserData).toContainText(defaultUser.fullName);
        await expect(homePageLocators.mainMenu.signupLogin).not.toBeVisible();
        await expect(homePage.mainMenu.logout).toBeVisible();
    });

    await test.step('Logout', async() => {
        await homePage.logout();
      await expect(homePageLocators.mainMenu.signupLogin).toBeVisible();
        await expect(homePage.mainMenu.logout).not.toBeVisible();
    });   

});
});
// login with wrong credentials