import { test as base } from '@playwright/test';

import { LoginSignUpPage } from '../pages/loginSignUpPage';
import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { ProductInfoPage } from '../pages/productInfoPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { PaymentPage } from '../pages/paymentPage';
import { PlacedOrderPage } from '../pages/placedOrderPage';

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
