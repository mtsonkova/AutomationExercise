import {HomePage} from '../pages/homePage';
import{ProductInfoLocators} from '../locators/productInfoLocators';
import {convertStringPriceToNumber} from '../utils/priceUtils';

export class ProductsPage extends HomePage {
    constructor(page){
        super(page);
        this.page = page;
        this.productInfoLocators = ProductInfoLocators(page);
    }

    async getProductName() {
       return await this.productInfoLocators.productName.textContent();
    }

    async getProductCategory() {
        return await this.productInfoLocators.productCategory.textContent();
    }

    async getProductPrice() {
        let priceAsText = await this.productInfoLocators.price.textContent();
        return convertStringPriceToNumber(priceAsText);
    }  

    async changeProductQty(qty) {
        await this.productInfoLocators.productQty.fill(qty);
    }

    async clickAddToCart() {
        await this.productInfoLocators.addToCartBtn.click();
    }



}