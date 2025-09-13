export const RegistrationFormLocators = (page) => ({
    accountInformation: {
        title: {
            mr: page.locator('#uniform-id_gender1'),
            mrs: page.locator('uniform-id_gender2'),
        },
        name: page.locator('[data-qa="name"]'),
        email: page.locator('[data-qa="email"]'),
        password: page.locator('[data-qa="password"]'),
        dateOfBirth: {
            daysDropdown: page.locator('[data-qa="days"]'),
            monthDropdown: page.locator('[data-qa="months"]'),
            yearsDropdown: page.locator('[data-qa="years"]'),
        },
        newsletterCheckbox: page.locator('#newsletter'),
        specialOffersCheckbox: page.locator('#optin'),
    },
    addressInformation: {
        required:{
            firstName: page.locator('[data-qa="first_name"]'),
            lastName: page.locator('[data-qa="last_name"]'),
            address: page.locator('[data-qa="address"]'),
            countryDropdown: page.locator('[data-qa="country"]'),
            state: page.locator('[data-qa="state"]'),
            city: page.locator('[data-qa="city"]'),
            zipCode: page.locator('[data-qa="zipcode"]'),
            mobileNumber:page.locator('[data-qa="mobile_number"]'),
        },
        optional: {
            company: page.locator('[data-qa="company"]'),
            address2: page.locator('[data-qa="address2"]'),
        },
    },
    createAccountBtn: page.locator('[data-qa="create-account"]'),
});