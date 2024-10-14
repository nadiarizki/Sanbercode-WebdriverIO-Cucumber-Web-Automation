@product
Feature: Customer Management

  Background: User logs in
    Given user is on the Login page
    When user inputs "nadia@gmail.com" as email
    And user inputs "admin123" as password
    And user clicks on login button

  @positive
  Scenario: Add New Customer
    When user clicks Customer button
    Then user should be redirected to the Customer page
    And user clicks Add customer button
    And user inputs customer details
    And user clicks Save button
    And user should see customer CRUD success toast is displayed

  @positive
  Scenario: Success Update Customer Details
    When user clicks Customer button
    Then user should be redirected to the Customer page
    When user clicks update customer option
    And user updates customer details
    And user clicks Save button
    And user should see customer CRUD success toast is displayed

  @positive
  Scenario: Success Delete Customer 
    When user clicks Customer button
    Then user should be redirected to the Customer page
    When user clicks delete customer option
    And user clicks Delete customer button
    And user should see customer CRUD success toast is displayed


