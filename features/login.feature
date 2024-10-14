@login
Feature: Login

Scenario: Success Login
    Given user is on the Login page
    When user inputs "nadia@gmail.com" as email
    And user inputs "admin123" as password
    And user clicks on login button
    Then user should be redirected to the Dashboard


@negative 
Scenario Outline: Unable to Login - <dataset>
    Given user is on the Login page
    When user inputs "<email>" as email
    And user inputs "<password>" as password
    And user clicks on login button
    Then user should see an error message "<errorMessage>"

    Examples:
    | dataset            | email           | password | errorMessage                              |
    | Empty Password     | nadia@gmail.com |          | \"password\" is not allowed to be empty   |
    | Email Email        |                 | admin123 | \"email\" is not allowed to be empty      |
    | Invalid Credential | nadia@gmail.com | admin1234| Kredensial yang Anda berikan salah        |