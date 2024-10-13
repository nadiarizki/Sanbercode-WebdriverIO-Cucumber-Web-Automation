@product
Feature: Login and Product Management

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

  # @positive
  # Scenario: Update Product Details
  #   When user clicks Product button
  #   Then user should be redirected to the Product page
  #   And user clicks Edit button
  #   And user updates product details
  #   And user clicks Save button


