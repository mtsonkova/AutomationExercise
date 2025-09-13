export class CookieConsentHelper {
  static async handleConsent(page) {
    const consentButton = page.locator('button:has-text("Consent")');

    if (await consentButton.isVisible()) {
      await consentButton.click();
      await page.waitForSelector('[data-testid="cookie-banner"]', { state: 'hidden' });
    }
    // If not visible, just continue with test execution
  }
}
