import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {

    get productButton () {  
        return $("//div[contains(text(),'produk')]");
    }

    get userButton () {  
        return $("//div[contains(text(),'pengguna')]");
    }

    get customerButton () {  
        return $("//div[contains(text(),'pelanggan')]");
    }

    // validate user is redirected to dashboard
    async validateOnDashboardPage () {
        await browser.pause(10000);
        console.log(await browser.getUrl()); // Log the current URL for debugging
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard');
        await expect(browser).toHaveTitle('kasirAja');
    }
    

    async clickProduct () {
        await this.productButton.waitForDisplayed({ timeout: 20000 });
        await this.productButton.click();
    }


    async clickUser () {
        await this.userButton.waitForDisplayed({ timeout: 20000 });
        await this.userButton.click();
    }

    async clickCustomer () {
        await this.customerButton.waitForDisplayed({ timeout: 20000 });
        await this.customerButton.click();
    }

    open() {
        return super.open('dashboard');
    }
}
   
export default new DashboardPage();