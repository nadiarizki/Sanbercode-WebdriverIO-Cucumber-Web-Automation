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

    get successToast () {  
        return $("//li[@class='chakra-toast']");
    }

    get threeDotsButton () {  
        return $("//td[contains(text(), 'Naadia')]/following-sibling::td//button[contains(@class, 'menu-button')]");
    }

    get updateOption () {  
        return $("//a[contains(text(), 'ubah')]");
    } 

    get deleteOption () {  
        return $("//button[contains(text(), 'hapus')]");
    }  

    get deleteButton () {  
        return $("//button[normalize-space()='Delete']");
    }  
    
    // validate user is redirected to Customer Page
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
    }

    async updateCustomerDetail () {
        await this.inputName.clearValue();
        await this.inputName.setValue(" Name Update");
        await this.inputNote.clearValue();
        await this.inputNote.setValue(" update");
    }

    async saveProduct () {
        await this.saveButton.click();
    }

    async validateSuccessToast () {
        await expect(this.successToast).toHaveText(
            expect.stringContaining("success"))
    }

    async clickUpdateCustomer () {
        await this.threeDotsButton.click();
        await this.updateOption.click();
    }

    async clickDeleteCustomer () {
        await this.threeDotsButton.click();
        await this.deleteOption.click();
    }

    async clickDeleteButton () {
        await this.deleteButton.click();
    }

    open() {
        return super.open('customerx');
 }
}
   
export default new CustomerPage();