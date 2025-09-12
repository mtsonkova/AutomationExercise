export const AccountCreatedLocators = (page) => ({
    accCreatedTitle: page.locator('[data-qa="account-created"]'),
    congratulationsText:page.locator('div.row p').nth(0),
    benefitsText: page.locator('div.row p').nth(1),
    continueBtn: page.locator('[data-qa="continue-button"]')
});