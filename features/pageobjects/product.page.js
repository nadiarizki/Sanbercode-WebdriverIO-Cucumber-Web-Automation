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

    get closeButton () {  
        return $("//button[@aria-label='Close']");
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

    get successToast () {  
        return $("ul[@id='chakra-toast-manager-top-right']");
    }

    async validateOnProductPage () {
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/products');
    }
    

    async clickAddProduct () {
        await this.addButton.click();
    }

    async addProductDetail () {
        await this.inputName.setValue("Baju");
        await this.inputDescription.setValue("Baju tidur anak");
        await this.inputBuyingPrice.setValue("10000");
        await this.inputSellingPrice.setValue("200000");
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

    async validateSuccessAddProduct () {
        await expect(this.successToast).toHaveText(
            expect.stringContaining("success"))
    }


    open() {
        return super.open('products');
 }
}
   
export default new ProductPage();