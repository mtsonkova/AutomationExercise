import {defaultUser, defaultPassword, dateOfBirth, addressInformation, testUser, } from '../src/utils/testData';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import {deleteAccountApi} from '../src/api/userApis';
import { generateRandomEmail } from '../src/utils/emailUtils';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { HomePage } from '../src/pages/homePage';
import { LoginSignUpPage } from '../src/pages/loginSignUpPage';
import { RegistrationFormPage } from '../src/pages/registrationFormPage';

import {test, expect} from '@playwright/test';


test.describe('Login and log out functionality', () => {
let email;
let loginSignUpPage;
let homePage;
let registrationFormPage;

let userObject = {
  password: defaultPassword,
  dateOfBirth: {
    day: dateOfBirth.birthDate,
    month: dateOfBirth.birthMonth,
    year: dateOfBirth.birthYear,
  },
 firstName: testUser.firstName,
  lastName: testUser.lastName,
  address: addressInformation.address,
  country: addressInformation.country,
  state: addressInformation.state,
  city: addressInformation.city,
  zipCode: addressInformation.zipcode,
  mobileNumber: addressInformation.mobileNumber,
}

test.beforeEach('Initial setup', async({page}) => {
    loginSignUpPage = new LoginSignUpPage(page);
    homePage = new HomePage(page);
    registrationFormPage = new RegistrationFormPage(page);

    await page.goto('/login');
    await CookieConsentHelper.handleConsent(page);
    
});

test('Sign Up with valid credentials', async() => {
  email = generateRandomEmail();
  
  await test.step('Register new user in the system', async() => {
 await loginSignUpPage.goToRegistrationForm(testUser.fullName, email);
  await registrationFormPage.fillRegistrationForm(userObject);
  await registrationFormPage.verifyAccountCreation()
  let loggedInUserData = await homePage.getLoggedInUserName();
  expect(loggedInUserData).toContain(testUser.fullName);
  });

  await test.step('Delete newly registered user from the system', async({request}) => {
    await deleteAccountApi(request, email);
  });
});

test("Sign up with existing user", async() => {
  await loginSignUpPage.goToRegistrationForm(defaultUser.fullName, defaultUser.email);
  let errMsg = await loginSignUpPage.getEmailExistsErrMsg();
  expect(errMsg).toBe(texts.emailExistsErr);
 
})


});
