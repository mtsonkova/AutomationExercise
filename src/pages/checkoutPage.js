import {CheckoutLocators} from '../locators/checkoutLocators'

export class CheckoutPage{
    constructor(page) {
        this.page = page;
        this.checkoutLocators = CheckoutLocators(page);
    }

    async clickOnPlaceOrder() {
        await this.checkoutLocators.placeOrder.click();
    }
}