import { HomePageLocators } from '../locators/homePageLocators';
import {expect} from '@playwright/test';
import {convertStringPriceToNumber} from '../utils/priceUtils';
export class HomePage{
    constructor(page) {
        this.page = page;
        this.homePageLocators = HomePageLocators(page);
    }

    async goToProducts() {
        await this.homePageLocators.mainMenu.products.click();
    }

    async goToCart() {
        await this.homePageLocators.mainMenu.cart.click();

    }
    async getLoggedInUserName() {
        return await this.homePageLocators.mainMenu.loggedInAs.textContent();
    }   

    async logout() {
        await this.homePageLocators.mainMenu.logout.click();        
    }

    async checkLogoutState() {
        await expect(this.homePageLocators.mainMenu.signupLogin).toBeVisible();
        await expect(this.homePageLocators.mainMenu.logout).not.toBeVisible();
    }

    async clickContinueShopping() {
        await this.homePageLocators.cartModal.continueShoppingBtn.click();
    }

    async clickOnViewCart(){
        await this.homePageLocators.cartModal.viewCart.click();
    }

    async clickOnViewProduct(index){
        await this.homePageLocators.viewProduct.nth(index).click();
    }

  async getAllProducts() {
  const products = await this.homePageLocators.featuresItems.all();
  
  if (!products || products.length === 0) {
    throw new Error("No products found on the page.");
  }

  return products;
}
async addFirstProductToCart() {
   await this.homePageLocators.featuresItems.first().hover();
   await this.homePageLocators.addToCartBtn.first().click();
}

async addNthProductToCart(index) {
     await this.homePageLocators.featuresItems.nth(index).hover();
   await this.homePageLocators.addToCartBtn.nth(index).click();
}
  
}