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
        return $("//button[@id='menu-button-14']");
    }

    get updateOption () {  
        return $("//a[@id='menu-list-11-menuitem-8']");
    }  

    get errorMessage () {  
        return $("//div[@role='alert']");
    }    


    get successToast () {  
        return $("//ul[@id='chakra-toast-manager-top-right']");
    }  

    
    async validateOnUserPage () {
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/users');
    }
    

    async clickAddUser () {
        await this.addButton.click();
    }

    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(7); // Generates a random string
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

    async updateUserDetail () {
        await this.inputName.setValue("Update User");
    }


    async validateAddUserError (errorMessage) {
        await expect(this.errorMessage).toHaveText(
        expect.stringContaining(errorMessage))
    }


    async validateSuccessAddUser () {
        await expect(this.successToast).toHaveText(
            expect.stringContaining("success"))
    }



    open() {
        return super.open('users');
 }
}
   
export default new UserPage();