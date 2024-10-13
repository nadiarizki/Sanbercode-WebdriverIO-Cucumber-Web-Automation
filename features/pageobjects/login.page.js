import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    // deifine selectors
    get email () {
        return $('#email');
    }

    get password () {
        return $('#password');
    }

    get loginButton () {
        return $("//button[normalize-space()='login']");
    }

    get errorMessage () {
        return $("//div[@role='alert']");
    }

    async inputEmail (email) {
        await this.email.setValue(email);
    }

    async inputPassword (password) {
        await this.password.setValue(password);
    } 

    async clickLoginBtn () {
        await this.loginButton.click();
    }

    //login using username and password
    async login (email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

        //validate incorrect password error message is displayed
    async validateWrongPasswordError (errorMessage) {
         await expect(this.errorMessage).toHaveText(
         expect.stringContaining(errorMessage))
        }


    //open login page
    open () {
        return super.open('');
    }
}

export default new LoginPage();
