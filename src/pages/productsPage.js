import {HomePage} from '../pages/homePage';
import{ProductsPageLocators} from '../locators/productsPageLocators';

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


}