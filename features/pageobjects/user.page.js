import Page from './page.js';
import { $, browser, expect } from '@wdio/globals'

class UserPage extends Page {


    get addButton () {  
        return $("//a[normalize-space()='tambah']");
    }

    get inputName () {  
        return $("//input[@id='nama']");
    }
    
    get inputEmail () {  
        return $("//input[@id='email']");
    }

    get inputPassword () {  
        return $("//input[@id='password']");
    }

    get saveButton () {  
        return $("//button[normalize-space()='simpan']");
    }

    get threeDotsButton () {  
        return $("//td[contains(text(), 'iqbal')]/following-sibling::td//button[contains(@class, 'menu-button')]");
    }

    get updateOption () {  
        return $("//a[contains(text(), 'ubah')]");
    } 

    get deleteOption () {  
        return $("//button[contains(text(), 'hapus')]");
    }  

    get errorMessage () {  
        return $("//div[@role='alert']");
    }    

    get successToast () {  
        return $("//ul[@id='chakra-toast-manager-top-right']");
    }  

    get deleteButton () {  
        return $("//button[normalize-space()='Delete']");
    }  

    async validateOnUserPage () {
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users');
    }
    
    async clickAddUser () {
        await this.addButton.click();
    }

    async clickDeleteButton () {
        await this.deleteButton.click();
    }

    // Generates a random email 
    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(7); 
        return `iqbal_${randomString}@gmail.com`;
    }

    async addUserDetail () {
        const randomEmail = this.generateRandomEmail();
        await this.inputName.setValue("Iqbal");
        await this.inputEmail.setValue(randomEmail);
        await this.inputPassword.setValue("admin123");
    }

    async addSomeUserDetail (name, email, password) {
        await this.inputName.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    async saveUser () {
        await this.saveButton.click();
    }

    async clickUpdateUser () {
        await this.threeDotsButton.click();
        await this.updateOption.click();
    }

    async clickDeleteUser () {
        await this.threeDotsButton.click();
        await this.deleteOption.click();
    }


    async clickDeleteButton () {
        await this.deleteButton.click();
    }

    async updateUserDetail () {
        await this.inputName.setValue("Update User");
    }


    async validateAddUserErrorMessage (errorMessage) {
        await expect(this.errorMessage).toHaveText(
        expect.stringContaining(errorMessage))
    }


    async validateSuccessToast () {
        await this.successToast.waitForDisplayed({ timeout: 20000 });
        await expect(this.successToast).toHaveText(
            expect.stringContaining("success"))
    }


    open() {
        return super.open('users');
 }
}
   
export default new UserPage();