@product
Feature: Login and Product Management

  Background: User logs in
    Given user is on the Login page
    When user inputs "nadia@gmail.com" as email
    And user inputs "admin123" as password
    And user clicks on login button

  @positive
  Scenario: Add New Product
    When user clicks Product button
    Then user should be redirected to the Product page
    And user clicks Add button
    And user inputs product details
    And user clicks Save button
    And user should see success toast is displayed


  # @positive
  # Scenario: Update Product Details
  #   When user clicks Product button
  #   Then user should be redirected to the Product page
  #   And user clicks Edit button
  #   And user updates product details
  #   And user clicks Save button
