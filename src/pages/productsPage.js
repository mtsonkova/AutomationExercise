import {HomePage} from '../pages/homePage';
import{ProductsPageLocators} from '../locators/productsPageLocators';
import {validateProductIndex} from '../helpers/dataValidations';

export class ProductsPage extends HomePage {
    constructor(page){
        super(page);
        this.page = page;
        this.productsPageLocators = ProductsPageLocators(page);
    }

    async goToProductsPage() {
        await this.homePageLocators.mainMenu.products.click();
    }

    async searchForProduct(productName) {
        await this.productsPageLocators.searchBox.fill(productName);
        await this.productsPageLocators.searchBtn.click();
    }

    async getAllFoundProducts() {
        return this.productsPageLocators.searchResult;
    }

      async clickOnViewProduct(index){
        await validateProductIndex(
      index,
      () => this.getAllFoundProducts(),
      "products in catalog"
    );
        await this.homePageLocators.viewProduct.nth(index).click();
    }

    async addNthProductToCart(index) {
    await validateProductIndex(
      index,
      () => this.getAllFoundProducts(),
      "products in catalog"
    );
    await this.homePageLocators.featuresItems.nth(index).hover();
   await this.homePageLocators.addToCartBtn.nth(index).click();
}
   


}