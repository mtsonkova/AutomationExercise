import {CartLocators} from '../locators/cartLocators';
import {convertStringPriceToNumber} from '../utils/priceUtils';

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLocators = CartLocators(page);
    }

    async getEmptyCartMsg() {
        return await this.cartLocators.emptyCartMsg.textContent();
    }
    async getCartProuctName(index) {
        return await this.cartLocators.productName.nth(index).textContent();
    }

    async getCartProductCategory(index) {
        return await this.cartLocators.productCategory.nth(index).textContent();
    }

    async getCartSingleItemPrice(index) {
       let singleItemPrice =  await this.cartLocators.productPrice.nth(index).textContent();
       return convertStringPriceToNumber(singleItemPrice);
    }

    async getCartProductQty(index) {
        let qty =  await this.cartLocators.productQty.nth(index).textContent();
        return Number(qty);
    }
    
    async getCartProductTotalPrice(index) {
        let priceAstext = await this.cartLocators.productTotal.nth(index).textContent();
        return await convertStringPriceToNumber(priceAstext);
    }

    async clickOnProceedToCheckout() {
        await this.cartLocators.proceedToCheckoutBtn.click();
    }

    async clickOnLoginRegisterCartModal() {
        await this.cartLocators.checkoutModal.loginRegisterLink.waitFor({state: 'visible'});
        await this.cartLocators.checkoutModal.loginRegisterLink.click();
    }
}