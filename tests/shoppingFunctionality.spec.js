import {test,expect} from '@playwright/test';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { HomePage } from '../src/pages/homePage';
import { ProductsPage } from '../src/pages/productsPage';
import {ProductInfoPage} from '../src/pages/productInfoPage';
import {CartPage} from '../src/pages/cartPage';

test.describe('Shopping functionality tests - products search, shopping cart behavior', () => {
let homePage;
let productsPage;
let productInfoPage;
let cartPage;

test.beforeEach('Initial setup', async({page}) => {
 homePage = new HomePage(page);
 productsPage = new ProductsPage(page);
 productInfoPage = new ProductInfoPage(page);
 cartPage = new CartPage(page);
 await page.goto('/');

});

test('Search for product - existing product', async() => {
    await homePage.goToProducts();
    await productsPage.searchForProduct('top');
    let products = await homePage.getAllProducts();
    expect(products.count()).toBeGreaterThan(0);
});

test('Search for non existing product', async() => {
    await homePage.goToProducts();
    await productsPage.searchForProduct('test_product');
    await expect(homePage.getAllProducts()).rejects.toThrow("No products found");
})


})