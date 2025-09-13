import {defaultUser, defaultPassword, testUser} from '../src/utils/testData';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import {registerApi, deleteAccountApi} from '../src/api/userApis';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { generateRandomEmail } from '../src/utils/emailUtils';
import { LoginPage } from '../src/pages/loginPage';
import { HomePage } from '../src/pages/homePage';

import {test, expect} from '@playwright/test';

test.describe('Login and log out functionality', () => {
let email;
let loginPage;
let homePage;


test.beforeEach('Initial setup', async({page}) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await page.goto('/');
  await CookieConsentHelper.handleConsent(page);

   
});

test('Login with valid credentials and log out', async() => {
    await test.step('Lotin with valid credentials', async() => {
         await loginPage.login(defaultUser.email, defaultPassword);
        let loggedInUserData = await homePage.getLoggedInUserName();
        await loginPage.checkLoginState();
        expect(loggedInUserData).toContain(defaultUser.fullName);
        
    });

    await test.step('Logout', async() => {
        await homePage.logout();
        await homePage.checkLogoutState();
    
    });   
});

test('Login with wrong credentials should throw error', async() => {
    email = generateRandomEmail();
    await loginPage.login(email, defaultPassword);
    let errorMsg = await loginPage.getWrongCredentialsError();
    expect(errorMsg).toBe(texts.wrongCredentials);
});

test('Login with deleted user should throw an error', async({request}) => {
 email = generateRandomEmail();

  await test.step('Register new user', async()=> {
    await registerApi(request, email);
});
  await test.step('Login with newly created user', async()=> {
    await loginPage.login(email, defaultPassword);
    let loggedInUserData = await homePage.getLoggedInUserName();
      expect(loggedInUserData).toContain(testUser.fullName);
  });

  await test.step('Logout', async() => {
     await homePage.logout();
  });

  await test.step('Delete user', async() => {
    await deleteAccountApi(request, email);
  })

  await test.step('Attempt to login with deleted user', async() => {
    await loginPage.login(email, defaultPassword);
     let errorMsg = await loginPage.getWrongCredentialsError();
    expect(errorMsg).toBe(texts.wrongCredentials);
  })
})
});
