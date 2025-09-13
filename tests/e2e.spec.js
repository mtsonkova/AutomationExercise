import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import {LoginSignUpPage} from '../src/pages/loginSignUpPage';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { defaultUser, defaultPassword} from '../src/utils/testData';
import { HomePage } from '../src/pages/homePage';
import {ProductsPage} from '../src/pages/productsPage';
import {ProductInfoPage} from '../src/pages/productInfoPage';
import { CartPage } from '../src/pages/cartPage';
import { CheckoutPage } from '../src/pages/checkoutPage';
import { PaymentPage } from '../src/pages/paymentPage';
import { PlacedOrderPage } from '../src/pages/placedOrderPage';
import {test, expect} from '@playwright/test';


test.describe('E2E testing', () => {
    const searchedProduct = 'top';
    let loginSignUpPage;
    let homePage;
    let productsPage;
    let productInfoPage;
    let cartPage;
    let checkoutPage;
    let paymentPage;
    let placedOrderPage;
    

test.beforeEach('Initial setup', async({page}) => {
    loginSignUpPage = new LoginSignUpPage(page);
   homePage = new HomePage(page);
   productsPage = new ProductsPage(page);
   productInfoPage = new ProductInfoPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);
   placedOrderPage = new PlacedOrderPage(page);


    await page.goto('/');
     await CookieConsentHelper.handleConsent(page);
     
});

test('Purchase product as registered and logged in user', async() => {
    await test.step('Place order for product', async() => {
        await loginSignUpPage.login(defaultUser.email, defaultPassword);
        await homePage.goToProducts();
        await productsPage.searchForProduct(searchedProduct);
       await homePage.clickOnViewProduct(1);
       await productInfoPage.clickAddToCart();
        await homePage.clickOnViewCart();
        await cartPage.clickOnProceedToCheckout();
        await checkoutPage.clickOnPlaceOrder();
        await paymentPage.fillCreditCardInfo();
        await paymentPage.placeOrder();        
    });
    
    await test.step('Verify confimration page details', async() => {
        let title = await placedOrderPage.getTitle();
        let confirmMsg = await placedOrderPage.getConfirmMsg();
        expect(title).toContain(texts.placedOrder.placedOrderTitle);
        expect(confirmMsg).toContain(texts.placedOrder.congratulationsMsg);
    });

    await test.step('Download invoice', async() => {
        await placedOrderPage.downloadInvoice();
    });

    await test.step('Delete downloads folder', async() => {
        await placedOrderPage.deleteDownloadsFolder();
    })
 
});
});