import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import texts from '../src/utils/texts.json'  with { type: 'json' };
import { defaultUser, defaultPassword} from '../src/utils/testData';
import {test} from '../src/fixtures/e2eFixture';
import {expect} from '@playwright/test';


test.describe('E2E testing', () => {
    const searchedProduct = 'top';

    test.beforeEach('Initial setup', async({page}) => {
     await page.goto('/');
     await CookieConsentHelper.handleConsent(page);
     
});

test('Purchase product as registered and logged in user', async({loginSignUpPage,
    homePage,
    productsPage,
    productInfoPage,
    cartPage,
    checkoutPage,
    paymentPage,
    placedOrderPage,
   }) => {
    await test.step('Place order for product', async() => {
        await loginSignUpPage.login(defaultUser.email, defaultPassword);
        await homePage.goToProducts();
        await productsPage.searchForProduct(searchedProduct);
       await productsPage.clickOnViewProduct(1);
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