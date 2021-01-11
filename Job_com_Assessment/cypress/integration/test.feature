Feature: Job.com Website Functionality

  Scenario: New user Registration
    Given I am in the Job.com home page
    When I click on Register
    Then I should see the Message in the register page for User geolocation is other US

  Scenario: Verifying the User login feature with valid user details
    Given I am in the Job.com home page
    When I click on Sign in
    Then I should see the Sign in page
    When I enter the valid email
    And I enter the valid password
    And I click on the signin button
    Then I should be logged into the website

    Scenario: Verifying the Google sigin process
    Given I am in the Job.com home page
    When I click on Sign in
    Then I should see the Sign in page
    When I click on sign in with Google
    Then I should be prompted to the google signin page

    Scenario: Verifying the Forgot Password process
    Given I am in the Job.com home page
    When I click on Sign in
    Then I should see the Sign in page
    When I click on Forgot password link
    Then I should see the forgot password page
    When I enter the registered email
    And I click on Reset password
    Then I should see the forgot password success page
    And I should receive an email in the registered email

  Scenario:Verifying the Job search
    Given I am in the Job.com home page
    And I should see the search is disabled
    When I enter the role or keywords
    Then I should see the search is enabled
    When I click on search
    Then I should see the job list for this role
    When I click on any particular job title
    Then I should be prompted to the respective job site









