@login
Feature: Login test

Background: User logs in
    Given user is on the Login page


  @positive 
  Scenario Outline: Login with valid credentials
    When user inputs "<username>" as username
    And user inputs "<password>" as password
    When user clicks on login button
    Then user should be redirected to the home page

    Examples:
      | username | password |
      | standard_user | secret_sauce |
      | visual_user | secret_sauce |


  @negative @runthis
  Scenario Outline: Login with empty field
    When user login using "<username>" as username and "<password>" as password
    Then user should see an error message "<errorMessage>"
  
    Examples:
      | username | password | errorMessage |
      | standard_user |  | Epic sadface: Password is required |
      |   | secret_sauce | Epic sadface: Username is required |


  @negative 
  Scenario: Login with invalid credentials - effective
    When user login using "standard_user" as username and "secret_sauces" as password
    Then user should see an error message "Epic sadface: Username and password do not match any user in this service"


  @negative 
  Scenario: Login with invalid credentials - ineffective
    Given user is on the Login page
    And user inputs "standard_user" as username
    And user inputs "secret_sauces" as password
    When user clicks on login button
    Then user should see an error message "Epic sadface: Username and password do not match any user in this service"



