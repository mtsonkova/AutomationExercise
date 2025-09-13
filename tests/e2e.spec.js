import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import {registerApi, loginApi, searchProductApi, deleteAccountApi} from '../src/api/userApis';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { generateRandomEmail } from '../src/utils/emailUtils';
import { HomePage } from '../src/pages/homePage';
import { CartPage } from '../src/pages/cartPage';
import { CheckoutPage } from '../src/pages/checkoutPage';
import { PaymentPage } from '../src/pages/paymentPage';
import { PlacedOrderPage } from '../src/pages/placedOrderPage';
import {test, expect} from '@playwright/test';


test.describe('E2E testing', () => {
    let email;
    const searchedProduct = 'top';
    let homePage;
    let cartPage;
    let checkoutPage;
    let paymentPage;
    let placedOrderPage;

test.beforeEach('Initial setup', async({page, request}) => {
   homePage = new HomePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);
    placedOrderPage = new PlacedOrderPage(page);

    email = generateRandomEmail();
    await registerApi(request, email);
    await loginApi(request, email);
    await searchProductApi(request, searchedProduct);

    await page.goto('/products');
    await CookieConsentHelper();
});

test('Purchase product as registered and logged in user', async() => {
    await test.step('Place order for product', async() => {
        await homePage.addNthProductToCart(1);
        await homePage.clickOnViewCart();
        await cartPage.clickOnProceedToCheckout();
        await checkoutPage.clickOnPlaceOrder();
        await paymentPage.fillCreditCardInfo();
        await paymentPage.clickOnPlaceOrder();        
    });
    
    await test.step('Verify confimration page details', async() => {
        let title = await placedOrderPage.getTitle();
        let confirmMsg = await placedOrderPage.getConfirmMsg();
        expect(title).toContain(texts.placedOrder.placedOrderTitle);
        expect(confirmMsg).toContain(texts.placedOrder.congratulationsMsg);
    });

    await test.step('Download invoice', async() => {
        await placedOrderPage.downloadInvoice();
    })
 
});
});