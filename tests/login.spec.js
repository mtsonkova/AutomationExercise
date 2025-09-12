import {defaultUser, testUser, defaultPassword, defaultTitle, dateOfBirth, addressInformation} from '../src/utils/testData';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { generateRandomEmail } from '../src/utils/emailUtils';
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
    await page.goto('/');
  await CookieConsentHelper.handleConsent(page);

   
});

test('Login with valid credentials and log out', async() => {
    await test.step('Lotin with valid credentials', async() => {
         await loginPage.login(defaultUser.email, defaultPassword);
        let loggedInUserData = await homePage.getLoggedInUserName();
        expect(loggedInUserData).toContain(defaultUser.fullName);
        await expect(homePageLocators.mainMenu.signupLogin).not.toBeVisible();
        await expect(homePageLocators.mainMenu.logout).toBeVisible();
    });

    await test.step('Logout', async() => {
        await homePage.logout();
      await expect(homePageLocators.mainMenu.signupLogin).toBeVisible();
        await expect(homePageLocators.mainMenu.logout).not.toBeVisible();
    });   
});

test('Login with wrong credentials', async() => {
    email = generateRandomEmail();
    await loginPage.login(email, defaultPassword);
    let errorMsg = await loginPage.getWrongCredentialsError();
    expect(errorMsg).toBe(texts.wrongCredentials);
})
});
