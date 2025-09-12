// login
let url;
let userData;


export async function loginApi(request, email, password) {
    url = 'https://automationexercise.com/api/verifyLogin';
    userData = {
        email: '',
        password: '',
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

// register

// utils/apiCreateAccount.js
export async function registerApi(request) {
  // Build the request payload OUTSIDE try/catch
  userData = {
    // import the userValues from createRandomEmail and testData
    name: userValues.name,
    email: userValues.email,
    password: userValues.password,
    title: userValues.title,
    birth_date: userValues.birth_date,
    birth_month: userValues.birth_month,
    birth_year: userValues.birth_year,
    firstname: userValues.firstname,
    lastname: userValues.lastname,
    company: userValues.company,
    address1: userValues.address1,
    address2: userValues.address2,
    country: userValues.country,
    zipcode: userValues.zipcode,
    state: userValues.state,
    city: userValues.city,
    mobile_number: userValues.mobile_number
  };

  try {
    const response = await request.post('https://automationexercise.com/api/createAccount', {
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
export async function apiDeleteAccount(request, userValues) {
  // Build payload outside try/catch
  const userData = {
    email: userValues.email,
    password: userValues.password
  };

  try {
    const response = await request.post('https://automationexercise.com/api/deleteAccount', {
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
