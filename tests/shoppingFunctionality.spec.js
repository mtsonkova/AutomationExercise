import {test,expect} from '@playwright/test';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { HomePage } from '../src/pages/homePage';
import { ProductsPage } from '../src/pages/productsPage';
import {ProductInfoPage} from '../src/pages/productInfoPage';
import {CartPage} from '../src/pages/cartPage';

test.describe('Shopping functionality tests with guest user - products search, shopping cart behavior', () => {
let homePage;
let productsPage;
let productInfoPage;
let cartPage;
const existingProduct = 'top';
const nonExistingProduct = 'test_product';

test.beforeEach('Initial setup', async({page}) => {
 homePage = new HomePage(page);
 productsPage = new ProductsPage(page);
 productInfoPage = new ProductInfoPage(page);
 cartPage = new CartPage(page);
 await page.goto('/');
 await CookieConsentHelper.handleConsent(page);
});

test('Search for product - existing product', async() => {
    await homePage.goToProducts();
    await productsPage.searchForProduct(existingProduct);
    let products = await homePage.getAllProducts();
    expect(products.length).toBeGreaterThan(0);
});

test('Search for non existing product', async() => {
    await homePage.goToProducts();
    await productsPage.searchForProduct(nonExistingProduct);
    await expect(homePage.getAllProducts()).rejects.toThrow("No products found");
});

test('As Guest user add product to cart from products page', async () => {
    await homePage.goToProducts();
    await productsPage.searchForProduct(existingProduct);
    await productsPage.getAllFoundProducts();
    await homePage.addFirstProductToCart();
    await homePage.clickOnViewCart();
    await cartPage.clickOnProceedToCheckout();
    await cartPage.clickOnLoginRegisterCartModal();
    expect(await page.url()).toBe('https://www.automationexercise.com/login');
    });
    
    

})
