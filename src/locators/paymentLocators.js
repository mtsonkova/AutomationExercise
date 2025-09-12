export const PaymentLocators = (page) => ({
    nameOnCart: page.locator('[data-qa="name-on-card"]'),
    cardNumber: page.locator('[data-qa="card-number"]'),
    cvc: page.locator('[data-qa="cvc"]'),
    month: page.locator('[data-qa="expiry-month"]'),
    year: page.locator('[data-qa="expiry-year"]'),
    payAndConfirmBtn: page.locator('[data-qa="pay-button"]'),
})