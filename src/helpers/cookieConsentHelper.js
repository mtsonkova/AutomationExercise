export class CookieConsentHelper {
  static async handleConsent(page) {
    try {
      await page.waitForSelector('button:has-text("Consent")', { timeout: 2000 });
      await page.click('button:has-text("Consent")');
      await page.waitForSelector('[data-testid="cookie-banner"]', { state: 'hidden' });
    } catch (error) {
      // No banner appeared or already handled
    }
  }
}