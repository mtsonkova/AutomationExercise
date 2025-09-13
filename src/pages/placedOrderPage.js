import {PlacedOrderLocators} from '../locators/placedOrderLocators';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const fs = require('fs');
//const path = require('path');

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
    const downloadDir = path.join(__dirname, '../downloads');
    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir, { recursive: true });
    }

    const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.placedOrderLocators.downloadInvoice.click()
    ]);

    const filePath = path.join(downloadDir, 'invoice.txt');
    await download.saveAs(filePath);

    if (!fs.existsSync(filePath)) {
        throw new Error(`❌ Download failed: invoice.txt not found in ${downloadDir}`);
    }

    console.log(`✅ File downloaded successfully: ${filePath}`);
}

async deleteDownloadsFolder() {
    const downloadDir = path.join(__dirname, '../downloads');

    if (fs.existsSync(downloadDir)) {
        fs.rmSync(downloadDir, { recursive: true, force: true });
        console.log(`✅ Downloads folder deleted: ${downloadDir}`);
    } else {
        console.log(`ℹ️ Downloads folder not found: ${downloadDir}`);
    }
}
    
}