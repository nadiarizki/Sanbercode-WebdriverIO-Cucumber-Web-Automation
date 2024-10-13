import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';
import ProductPage from '../pageobjects/product.page.js';
import userPage from '../pageobjects/user.page.js';
import productPage from '../pageobjects/product.page.js';
import customerPage from '../pageobjects/customer.page.js';


const pages = {
    login: LoginPage
}

Given('user is on the Login page', async () => {
    await LoginPage.open()
});


When('user inputs {string} as email', async (email) => {
    await LoginPage.inputEmail(email)
});

When('user inputs {string} as password', async (password) => {
    await LoginPage.inputPassword(password)
});

When('user clicks on login button', async () => {
    await LoginPage.clickLoginBtn()
});

Then('user should be redirected to the Dashboard', async () => {
    await DashboardPage.validateOnDashboardPage()
});


Then('user should be redirected to the User page', async () => {
    await userPage.validateOnUserPage()
});

Then('user should be redirected to the Customer page', async () => {
    await customerPage.validateOnCustomerPage()
});

Then('user should see success toast is displayed', async () => {
    await productPage.validateSuccessAddProduct()
});

Then('user should see add user success toast is displayed', async () => {
    await userPage.validateSuccessAddUser()
});



When('user clicks Product button', async () => {
    await DashboardPage.clickProduct()
});

When('user clicks User button', async () => {
    await DashboardPage.clickUser()
});

When('user clicks Customer button', async () => {
    await DashboardPage.clickCustomer()
});

Then('user should be redirected to the Product page', async () => {
    await ProductPage.validateOnProductPage()
});


When('user clicks Add button', async () => {
    await ProductPage.clickAddProduct()
});

When('user inputs product details', async () => {
    await ProductPage.addProductDetail()
});

When('user inputs user details', async () => {
    await userPage.addUserDetail()
});

When('user inputs customer details', async () => {
    await userPage.addCustomerDetail()
});


When('user clicks Save button', async () => {
    await ProductPage.saveProduct()
});


When('user clicks Edit button', async () => {
    await ProductPage.clickUpdateProduct()
});


When('user clicks update user option', async () => {
    await userPage.clickUpdateUser()
});


When('user updates product details', async () => {
    await ProductPage.updateProductDetail()
});

When('user updates user details', async () => {
    await userPage.updateUserDetail()
});

When('user clicks Add user button', async () => {
    await userPage.clickAddUser()
});

When('user clicks Add customer button', async () => {
    await customerPage.clickAddCustomer()
});


Then('user should see an error message {string}', async (errorMessage) => {
    await LoginPage.validateWrongPasswordError(errorMessage)
});

When('user inputs {string}, {string} and {string}', async (name, email, password) => {
    await userPage.addSomeUserDetail(name, email, password)
});


Then('user should see add user error message {string}', async (errorMessage) => {
    await userPage.validateAddUserError(errorMessage)
});
