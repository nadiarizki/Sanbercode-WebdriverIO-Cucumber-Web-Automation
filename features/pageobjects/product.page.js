import Page from './page.js';
import { $, browser, expect } from '@wdio/globals'

class ProductPage extends Page {


    get addButton () {  
        return $("//a[normalize-space()='tambah']");
    }

    get inputName () {  
        return $("//input[@id='nama']");
    }
    
    get inputDescription () {  
        return $("//input[@id='deskripsi']");
    }

    get inputBuyingPrice () {  
        return $("//input[@id='harga beli']");
    }

    get inputSellingPrice () {  
        return $("//input[@id='harga jual']");
    }

    get inputStock () {  
        return $("//input[@id='stok']");
    }

    get inputCategory () {  
        return $("//input[@id='kategori']");
    }

    get selectCategory () {  
        return $("//td[@role='gridcell']");
    }

    get saveButton () {  
        return $("//button[normalize-space()='simpan']");
    }

    get successToast () {  
        return $("//li[@class='chakra-toast']");
    }

    get threeDotsButton () {  
        return $("//td[contains(text(), 'Baju')]/following-sibling::td//button[contains(@class, 'menu-button')]");
    }

    get updateOption () {  
        return $("(//a[normalize-space()='ubah'])[1]");
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

    async validateOnProductPage () {
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products');
    }
    

    async clickAddProduct () {
        await this.addButton.click();
    }

    //delete product
    async addProductDetail () {
        await this.inputName.setValue("Baju");
        await this.inputDescription.setValue("Baju tidur anak");
        await this.inputBuyingPrice.setValue("10000");
        await this.inputSellingPrice.setValue("200000");
        await this.inputStock.setValue("15");
        await this.inputCategory.click();
        await this.selectCategory.click();
    }

    async saveProduct () {
        await this.saveButton.click();
    }

    async validateSuccessToast () {
        await expect(this.successToast).toHaveText(
            expect.stringContaining("success"))
    }


    //delete product
    async clickUpdateProduct () {
        await this.threeDotsButton.click();
        await this.updateOption.click();
    }

    async updateProductDetail () {
        await this.inputDescription.waitForDisplayed({ timeout: 10000 });
        await this.inputDescription.clearValue();
        await this.inputDescription.setValue("Update Detail");
        await this.inputStock.clearValue();
        await this.inputStock.setValue("10");
    }


    //delete product
    async clickDeleteProduct () {
        await this.threeDotsButton.click();
        await this.deleteOption.click();
    }

    async clickDeleteButton () {
        await this.deleteButton.click();
    }

    open() {
        return super.open('products');
 }
}
   
export default new ProductPage();