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


// Login Feature
Given('user is on the Login page', async () => {
    await LoginPage.open()
    await browser.maximizeWindow();
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

Then('user should see an error message {string}', async (errorMessage) => {
    await LoginPage.validateLoginErrorMessage(errorMessage)
});



// User Management Feature

When('user clicks User button', async () => {
    await DashboardPage.clickUser()
});

Then('user should be redirected to the User page', async () => {
    await userPage.validateOnUserPage()
});

When('user clicks Add user button', async () => {
    await userPage.clickAddUser()
});


When('user inputs user details', async () => {
    await userPage.addUserDetail()
});

When('user inputs {string}, {string} and {string}', async (name, email, password) => {
    await userPage.addSomeUserDetail(name, email, password)
});


Then('user should see add user success toast is displayed', async () => {
    await userPage.validateSuccessToast()
});

Then('user should see add user error message {string}', async (errorMessage) => {
    await userPage.validateAddUserErrorMessage(errorMessage)
});

When('user clicks update user option', async () => {
    await userPage.clickUpdateUser()
});

When('user updates user details', async () => {
    await userPage.updateUserDetail()
});

When('user clicks delete user option', async () => {
    await userPage.clickDeleteUser()
});

When('user clicks Delete user button', async () => {
    await userPage.clickDeleteButton()
});


Then('user should see user CRUD success toast is displayed', async () => {
    await userPage.validateSuccessToast()
}); 


// Customer Management Feature

When('user clicks Customer button', async () => {
    await DashboardPage.clickCustomer()
});

Then('user should be redirected to the Customer page', async () => {
    await customerPage.validateOnCustomerPage()
});


When('user clicks Add customer button', async () => {
    await customerPage.clickAddCustomer()
});

When('user inputs customer details', async () => {
    await customerPage.addCustomerDetail()
});

Then('user should see customer CRUD success toast is displayed', async () => {
    await customerPage.validateSuccessToast()
});

When('user clicks update customer option', async () => {
    await customerPage.clickUpdateCustomer()
});


When('user updates customer details', async () => {
    await customerPage.updateCustomerDetail()
});


When('user clicks delete customer option', async () => {
    await customerPage.clickDeleteCustomer()
});

When('user clicks Delete customer button', async () => {
    await customerPage.clickDeleteButton()
});

// Product Management Feature

When('user clicks Product button', async () => {
    await DashboardPage.clickProduct()
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


When('user clicks Save button', async () => {
    await ProductPage.saveProduct()
});


When('user clicks update product option', async () => {
    await ProductPage.clickUpdateProduct()
});


When('user updates product details', async () => {
    await ProductPage.updateProductDetail()
});


When('user clicks delete product option', async () => {
    await ProductPage.clickDeleteProduct()
});

When('user clicks Delete product button', async () => {
    await productPage.clickDeleteButton()
});

Then('user should see product CRUD success toast is displayed', async () => {
    await productPage.validateSuccessToast()
});
