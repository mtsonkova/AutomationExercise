import { test as base, expect } from '@playwright/test';
import { CookieConsentHelper } from '../src/helpers/cookieConsentHelper';
import { LoginSignUpPage } from '../src/pages/loginSignUpPage';
import { HomePage } from '../src/pages/homePage';
import { ProductsPage } from '../src/pages/productsPage';
import { ProductInfoPage } from '../src/pages/productInfoPage';
import { CartPage } from '../src/pages/cartPage';
import { CheckoutPage } from '../src/pages/checkoutPage';
import { PaymentPage } from '../src/pages/paymentPage';
import { PlacedOrderPage } from '../src/pages/placedOrderPage';
import texts from '../src/utils/texts.json';
import { defaultUser, defaultPassword } from '../src/utils/testData';

// Extend base test with our pages
export const test = base.extend({
  loginSignUpPage: async ({ page }, use) => {
    await use(new LoginSignUpPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productInfoPage: async ({ page }, use) => {
    await use(new ProductInfoPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  placedOrderPage: async ({ page }, use) => {
    await use(new PlacedOrderPage(page));
  },
});
