import {PaymentLocators} from '../locators/paymentLocators';
import { testUser, paymentMethod } from '../utils/testData';

export class PaymentPage {
    constructor(page) {
        this.page = page;
        this.paymentLocators = PaymentLocators(page);
    }

    async fillCreditCardInfo() {
        await this.paymentLocators.nameOnCart.fill(testUser.fullName);
        await this.paymentLocators.cardNumber.fill(paymentMethod.cardNumber);
        await this.paymentLocators.cvc.fill(paymentMethod.cvc);
        await this.paymentLocators.month.fill(paymentMethod.expirationMonth);
        await this.paymentLocators.year.fill(paymentMethod.year);
      
    }

    async placeOrder() {
        await this.paymentLocators.payAndConfirmBtn.click();
    }
}