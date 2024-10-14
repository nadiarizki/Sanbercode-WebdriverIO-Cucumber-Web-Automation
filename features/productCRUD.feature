@product
Feature: Login and Product Management

  Background: User logs in
    Given user is on the Login page
    When user inputs "nadia@gmail.com" as email
    And user inputs "admin123" as password
    And user clicks on login button

  @positive
  Scenario: Success Add New Product
    When user clicks Product button
    Then user should be redirected to the Product page
    And user clicks Add button
    And user inputs product details
    And user clicks Save button
    And user should see product CRUD success toast is displayed


  @positive
  Scenario: Success Update Product Details
    When user clicks Product button
    Then user should be redirected to the Product page
    When user clicks update product option
    And user updates product details
    And user clicks Save button
    And user should see product CRUD success toast is displayed

  @positive
  Scenario: Success Delete User 
    When user clicks Product button
    Then user should be redirected to the Product page
    When user clicks delete product option
    And user clicks Delete product button
    And user should see product CRUD success toast is displayed
