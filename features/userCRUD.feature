@user
Feature: User Management

  Background: User logs in
    Given user is on the Login page
    When user inputs "nadia@gmail.com" as email
    And user inputs "admin123" as password
    And user clicks on login button

  @positive
  Scenario: Success Add New User
    When user clicks User button
    Then user should be redirected to the User page
    When user clicks Add user button
    And user inputs user details
    And user clicks Save button
    Then user should see user CRUD success toast is displayed

  @positive
  Scenario: Success Update User Details
    When user clicks User button
    Then user should be redirected to the User page
    When user clicks update user option
    And user updates user details
    And user clicks Save button
    Then user should see user CRUD success toast is displayed

  @positive
  Scenario: Success Delete User 
    When user clicks User button
    Then user should be redirected to the User page
    When user clicks delete user option
    And user clicks Delete user button
    Then user should see user CRUD success toast is displayed

  @negative 
  Scenario Outline: Unable to Add User - <dataset>
    When user clicks User button
    Then user should be redirected to the User page
    And user clicks Add user button
    And user inputs "<name>", "<email>" and "<password>"
    And user clicks Save button
    Then user should see add user error message "<errorMessage>"

    Examples:
    | dataset          | name            | email            | password  | errorMessage |
    | Empty Name       |                 | test1@gmail.com  | admin123  | \"name\" is not allowed to be empty     |
    | Empty Email      | Nadia Rizki     |                  |           | \"email\" is not allowed to be empty    |
    | Empty password   | Nadia Rizki     | test2@gmail.com  |           | \"password\" is not allowed to be empty |
    | Invalid Email    | Nadia Rizki     | testgmailcom     | admin123  | \"email\" must be a valid email         |
    | Registered Email | Nadia Rizki     | nadiar@gmail.com | admin123  | Email sudah digunakan                   |
