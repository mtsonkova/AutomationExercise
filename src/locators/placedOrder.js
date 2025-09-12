export const PlacedOrderLocators = (page) => ({
    placedOrderTitle: page.locator('[data-qa="order-placed"]'),
    confirmParagraph: page.locator('#form p'),
    downloadInvoice: page.getByRole('link', {name: 'Download Invoice'}),
    continue: page.locator('[data-qa="continue-button"]'),
})