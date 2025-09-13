import {test,expect} from '@playwright/test';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { HomePage } from '../src/pages/homePage';
import { ProductsPage } from '../src/pages/productsPage';
import {ProductInfoPage} from '../src/pages/productInfoPage';
import {CartPage} from '../src/pages/cartPage';
import { LoginSignUpPage } from '../src/pages/loginSignUpPage';

test.describe('Shopping functionality tests with guest user - products search, shopping cart behavior', () => {

let homePage;
let productsPage;
let productInfoPage;
let cartPage;
let loginSignUpPage;

const existingProduct = 'top';
const nonExistingProduct = 'test_product';

test.beforeEach('Initial setup', async({page}) => {
 homePage = new HomePage(page);
 productsPage = new ProductsPage(page);
 productInfoPage = new ProductInfoPage(page);
 cartPage = new CartPage(page);
 loginSignUpPage = new LoginSignUpPage(page);
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

test('Inspect empty shopping cart', async() => {
    await homePage.goToCart();
    let cartMsg = await cartPage.getEmptyCartMsg();
    expect(cartMsg).toContain(texts.emptyCart)
})
test('As Guest user add product to cart from products page', async () => {
    await homePage.goToProducts();
    await productsPage.searchForProduct(existingProduct);
    await productsPage.getAllFoundProducts();
    await homePage.addFirstProductToCart();
    await homePage.clickOnViewCart();
    await cartPage.clickOnProceedToCheckout();
    await cartPage.clickOnLoginRegisterCartModal();
   await loginSignUpPage.checkLoginTitleVisibility();
   await loginSignUpPage.checkRegisterTitleVisibility();
    });
    
test('As Guest user add product to cart from product info page', async () => {
    let productName;
    let productCategory;
    let productPrice;
    let productQty = '3';

    await test.step('Search for products', async () => {
        await homePage.goToProducts();
        await productsPage.searchForProduct(existingProduct);
        await productsPage.getAllFoundProducts();
        await homePage.clickOnViewProduct(1);
    });

    await test.step('View product details', async() => {
        productName = await productInfoPage.getProductName();
        productCategory = await productInfoPage.getProductCategory();
        productPrice = await productInfoPage.getProductPrice();
    });

    await test.step('Add product to cart', async() => {
        await productInfoPage.changeProductQty(productQty);
        await productInfoPage.clickAddToCart();
        await homePage.clickOnViewCart();
    });

    await test.step('Verify product information in cart', async() => {
        let cartProductName = await cartPage.getCartProuctName(0);
        let cartProductCategory = await cartPage.getCartProductCategory(0);
        let cartProductPrice = await cartPage.getCartSingleItemPrice(0);
        let cartProductQty = await cartPage.getCartProductQty(0);
        let cartProductTotal = await cartPage.getCartProductTotalPrice(0);

        expect(cartProductName).toBe(productName);
        expect(productCategory).toContain(cartProductCategory);
        expect(cartProductPrice).toBe(productPrice);
        expect(cartProductQty).toBe(Number(productQty));
        expect(cartProductTotal).toBe(cartProductQty * cartProductPrice);
    });    

    });
    

})
