import {PlacedOrderLocators} from '../locators/placedOrderLocators';

export class PlacedOrderPage{
    constructor(page) {
        this.page = page;
        this.placedOrderLocators = PlacedOrderLocators(page);
    }

    async getTitle() {
       return await this.placedOrderLocators.placedOrderTitle.textContent();        
    }

    async getConfirmMsg() {
        return await this.placedOrderLocators.confirmParagraph.textContent();
    }

    async downloadInvoice() {
        await this.placedOrderLocators.downloadInvoice.click();
    }
}