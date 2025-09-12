import {defaultUser, testUser, defaultPassword, defaultTitle, dateOfBirth, addressInformation} from '../utils/testData';
import { generateRandomEmail } from '../utils/emailUtils';

let url;
let userData;
let userEmail;

export async function loginApi(request) {
    url = 'https://automationexercise.com/api/verifyLogin';
    userEmail = generateRandomEmail();

    userData = {
        email: userEmail,
        password: defaultPassword,
    }
  try {
    const response = await request.post(url, {
      form: userData
    });

    // Check status code
    if (response.status() !== 200) {
      throw new Error(`Expected status 200 but got ${response.status()}`);
    }

    const body = await response.text();
    console.log('API Response:', body);

    // Check message
    if (!body.includes('User exists!')) {
      throw new Error(`Unexpected response message: ${body}`);
    }

    return { success: true, message: body };

  } catch (error) {
    console.error('Login API failed:', error.message);
    return { success: false, error: error.message };
  }
}

export async function registerApi(request) {
    url = 'https://automationexercise.com/api/createAccount',
    userEmail = generateRandomEmail();
  // Build the request payload OUTSIDE try/catch
  userData = {
    // import the userValues from createRandomEmail and testData
    name: testUser.fullName,
    email: userEmail,
    password: defaultPassword,
    title: defaultTitle,
    birth_date: dateOfBirth.birth_date,
    birth_month: dateOfBirth.birth_month,
    birth_year: dateOfBirth.birth_year,
    firstname: testUser.firstName,
    lastname: testUser.lastName,
    company: '',
    address1: addressInformation.address,
    address2: '',
    country: addressInformation.country,
    zipcode: addressInformation.zipcode,
    state: addressInformation.state,
    city: addressInformation.city,
    mobile_number: addressInformation.mobileNumber
  };

  try {
    const response = await request.post(url, {
      form: userData
    });

    // Validate status code
    if (response.status() !== 201) {
      throw new Error(`Expected status 201 but got ${response.status()}`);
    }

    const body = await response.text();
    console.log('API Response:', body);

    // Validate response message
    if (!body.includes('User created!')) {
      throw new Error(`Unexpected response message: ${body}`);
    }

    return { success: true, message: body };

  } catch (error) {
    console.error('Account creation failed:', error.message);
    return { success: false, error: error.message };
  }
}

// delete account

// utils/apiDeleteAccount.js
export async function apiDeleteAccount(request, userEmail) {
  // Build payload outside try/catch
  url = 'https://automationexercise.com/api/deleteAccount';
  const userData = {
    email: userEmail,
    password: defaultPassword,
  };

  try {
    const response = await request.post(url, {
      form: userData
    });

    // Validate status code
    if (response.status() !== 200) {
      throw new Error(`Expected status 200 but got ${response.status()}`);
    }

    const body = await response.text();
    console.log('API Response:', body);

    // Validate response message
    if (!body.includes('Account deleted!')) {
      throw new Error(`Unexpected response message: ${body}`);
    }

    return { success: true, message: body };

  } catch (error) {
    console.error('Account deletion failed:', error.message);
    return { success: false, error: error.message };
  }
}
