import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    // deifine selectors
    get username () {
        return $('#user-name');
    }

    get password () {
        return $('#password');
    }

    get loginButton () {
        return $('//input[@type="submit"]');
    }

    get errorMessage () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    async inputUsername (username) {
        await this.username.setValue(username);
    }

    async inputPassword (password) {
        await this.password.setValue(password);
    } 

    async clickLoginBtn () {
        await this.loginButton.click();
    }

    //login using username and password
    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }


    //validate incorrect password error message is displayed
    async validateWrongPasswordError (errorMessage) {
        await expect(this.errorMessage).toHaveText(
        expect.stringContaining(errorMessage)
        )
    }

    //open login page
    open () {
        return super.open('');
    }
}

export default new LoginPage();
