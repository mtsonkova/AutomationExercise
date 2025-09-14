import {CartLocators} from '../locators/cartLocators';
import {convertStringPriceToNumber} from '../utils/priceUtils';
import {validateProductIndex} from '../helpers/dataValidations';

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLocators = CartLocators(page);
    }

    async getAllProductsInCart() {
        return this.cartLocators.cartProducts;
    }

    async getEmptyCartMsg() {
        return await this.cartLocators.emptyCartMsg.textContent();
    }
    async getCartProuctName(index) {
        await validateProductIndex(
      index,
      () => this.getAllProductsInCart(),
      "products in cart"
    );
        return await this.cartLocators.productName.nth(index).textContent();
    }

    async getCartProductCategory(index) {
         await validateProductIndex(
      index,
      () => this.getAllProductsInCart(),
      "products in cart"
    );
        return await this.cartLocators.productCategory.nth(index).textContent();
    }

    async getCartSingleItemPrice(index) {
         await validateProductIndex(
      index,
      () => this.getAllProductsInCart(),
      "products in cart"
    );
       let singleItemPrice =  await this.cartLocators.productPrice.nth(index).textContent();
       return convertStringPriceToNumber(singleItemPrice);
    }

    async getCartProductQty(index) {
         await validateProductIndex(
      index,
      () => this.getAllProductsInCart(),
      "products in cart"
    );
        let qty =  await this.cartLocators.productQty.nth(index).textContent();
        return Number(qty);
    }
    
    async getCartProductTotalPrice(index) {
         await validateProductIndex(
      index,
      () => this.getAllProductsInCart(),
      "products in cart"
    );
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