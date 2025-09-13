export const CheckoutLocators = (page)=> ({
    //TODO Delivery address locators
    //TODO Billing Address locators
    totalAmount: page.locator('td p.cart_total_price').last(),
    placeOrder: page.getByRole('link', {name: /Place Order/}),
})