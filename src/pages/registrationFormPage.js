import {LoginSignUpLocators} from '../locators/loginSignUpLocators';
import {RegistrationFormLocators} from '../locators/registrationFormLocators';
import {AccountCreatedLocators} from '../locators/accountCreatedLocators';
import texts from '../utils/texts.json'  with { type: 'json' };
import {expect} from '@playwright/test';

export class RegistrationFormPage{
    constructor(page) {
        this.page = page;
        this.loginSignUpLocators = LoginSignUpLocators(page);
        this.registrationFormLocators = RegistrationFormLocators(page);
        this.accountCreatedLocators = AccountCreatedLocators(page);
    }

  
async fillRegistrationForm(userObject){
    // user details
    //await this.registrationFormLocators.accountInformation.title.mrs.click({force:true});
    await this.registrationFormLocators.accountInformation.password.fill(userObject.password);
    await this.registrationFormLocators.accountInformation.dateOfBirth.daysDropdown.selectOption(userObject.dateOfBirth.day);
    await this.registrationFormLocators.accountInformation.dateOfBirth.monthDropdown.selectOption(userObject.dateOfBirth.month);
    await this.registrationFormLocators.accountInformation.dateOfBirth.yearsDropdown.selectOption(userObject.dateOfBirth.year);

    // address information
    await this.registrationFormLocators.addressInformation.required.firstName.fill(userObject.firstName);
    await this.registrationFormLocators.addressInformation.required.lastName.fill(userObject.lastName);
    await this.registrationFormLocators.addressInformation.required.address.fill(userObject.address);
    await this.registrationFormLocators.addressInformation.required.countryDropdown.selectOption(userObject.country);
    await this.registrationFormLocators.addressInformation.required.state.fill(userObject.state);
   await this.registrationFormLocators.addressInformation.required.city.fill(userObject.city);
   await this.registrationFormLocators.addressInformation.required.zipCode.fill(userObject.zipCode);
   await this.registrationFormLocators.addressInformation.required.mobileNumber.fill(userObject.mobileNumber);

   await this.registrationFormLocators.createAccountBtn.click();
}

async verifyAccountCreation() {
let title = await this.accountCreatedLocators.accCreatedTitle.textContent();
let successMsg = await this.accountCreatedLocators.congratulationsText.textContent();
let benefits = await this.accountCreatedLocators.benefitsText.textContent();
expect(title).toBe(texts.accountCreated.accountCreatedTitle);
expect(successMsg).toBe(texts.accountCreated.congratulations);
expect(benefits).toBe(texts.accountCreated.accountBenefits);

await this.accountCreatedLocators.continueBtn.click();
}


}
