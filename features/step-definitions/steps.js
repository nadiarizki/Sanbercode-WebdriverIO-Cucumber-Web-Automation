import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

const pages = {
    login: LoginPage
}

Given('user is on the Login page', async () => {
    await LoginPage.open()
});


When('user inputs {string} as username', async (username) => {
    await LoginPage.inputUsername(username)
});

When('user inputs {string} as password', async (password) => {
    await LoginPage.inputPassword(password)
});

When('user clicks on login button', async () => {
    await LoginPage.clickLoginBtn()
});

Then('user should be redirected to the home page', async () => {
    await HomePage.validateOnHomePage()
});

When('user login using {string} as username and {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginBtn()
});


Then('user should see an error message {string}', async (errorMessage
) => {
    await LoginPage.validateWrongPasswordError(errorMessage)
});



// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });

