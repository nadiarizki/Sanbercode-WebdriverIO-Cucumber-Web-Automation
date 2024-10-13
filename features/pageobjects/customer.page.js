import Page from './page.js';
import { $, browser, expect } from '@wdio/globals'

class CustomerPage extends Page {


    get addButton () {  
        return $("//a[normalize-space()='tambah']");
    }

    get inputName () {  
        return $("//input[@id='nama']");
    }
    
    get inputPhoneNo () {  
        return $("//input[@id='no.hp']");
    }

    get inputAddress () {  
        return $("//input[@id='alamat']");
    }

    get inputNote () {  
        return $("//input[@id='keterangan']");
    }

    get saveButton () {  
        return $("//button[normalize-space()='simpan']");
    }

    get threeDotsButton () {  
        return $("//button[@id='menu-button-55']");
    }

    get updateOption () {  
        return $("(//a[normalize-space()='ubah'])[1]");
    }
    
    // validate user is redirected to checkout page and item is added to cart
    async validateOnCustomerPage () {
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/customers');
    }
    

    async clickAddCustomer () {
        await this.addButton.click();
    }

    async addCustomerDetail () {
        await this.inputName.setValue("Naadia");
        await this.inputPhoneNo.setValue("087884398009");
        await this.inputAddress.setValue("cipete");
        await this.inputNote.setValue("test");
        await this.inputStock.setValue("15");
        await this.inputCategory.click();
        await this.closeButton.click();
    }

    async saveProduct () {
        await this.saveButton.click();
    }

    async clickUpdateProduct () {
        await this.threeDotsButton.click();
        await this.updateOption.click();
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products/00a52c50-a16c-421f-b063-9601fbcdd593/edit');
    }

    async updateProductDetail () {
        await this.inputDescription.setValue("Update Detail");
        await this.inputStock.setValue("10");
        await this.inputCategory.click();
        await this.closeButton.click();
    }



    open() {
        return super.open('customerx');
 }
}
   
export default new CustomerPage();