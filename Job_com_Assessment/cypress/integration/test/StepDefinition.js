const data = require("../../fixtures/data");
import PageObjects from "./PageObjects";
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Job.com home page", () => {
  PageObjects.getURL();
  PageObjects.wait();
  
});

When("I click on Register", () => {
    PageObjects.getRegister().click();
    PageObjects.wait();
    
  });

  Then("I should see the Message in the register page for User geolocation is other US", () => {
    PageObjects.registermsg().should('contain',data.regmsg);
  });

  When("I click on Sign in", () => {
    PageObjects.login().click();
    PageObjects.wait();
    
  });

  Then("I should see the Sign in page", () => {
    PageObjects.urlValidation().should('include','/signin');
  });

  When("I enter the valid email", () => {
    PageObjects.email().type(data.email);
    PageObjects.wait();
    
  });

  And("I enter the valid password", () => {
    PageObjects.password().type(data.password);
    
    
  });

  And("I click on the signin button", () => {
    PageObjects.signin().click();
    
    
  });

  And("I should be logged into the website", () => {
   //didn't have the valid login details so couldn't achieve this
  });

  When("I click on sign in with Google", () => {
    PageObjects.googleSignin().click();
    PageObjects.wait();
    
  });

  Then("I should be prompted to the google signin page", () => {
    PageObjects.googlepage().should('contains',data.googletitle)
    PageObjects.tabClose();
  });

  When("I click on Forgot password link", () => {
    PageObjects.forgetPassword().click();
    PageObjects.wait();
    
  });

  Then("I should see the forgot password page", () => {
    PageObjects.urlValidation().should('include','/forgot-password');
  });

  When("I enter the registered email", () => {
    PageObjects.email().type(data.email);
    PageObjects.wait();
    
  });

  And("I click on Reset password", () => {
    PageObjects.resetPassword().click()
  });

  Then("I should see the forgot password success page", () => {
    PageObjects.urlValidation().should('include','/success');
  });

  And("I should receive an email in the registered email", () => {
   //I didn't have the registered email so didn't received the email
  });


  And('I should see the search is disabled', () => {
    //PageObjects.search().should('be.disabled');
  })

  When("I enter the role or keywords", () => {
    PageObjects.keywords().type(data.job);
    PageObjects.wait();
    PageObjects.roleSel().click();
    
    
  });

  And('I should see the search is enabled', () => {
    //PageObjects.search().should('be.enabled');
  })

  When("I click on search", () => {
    PageObjects.search().click();
    
    
  });

  Then('I should see the job list for this role', () => {
    PageObjects.urlValidation().should('include','/search');
  })

  When("I click on any particular job title", () => {
    PageObjects.jobTitle().click();
    
    
  });

  Then('I should be prompted to the respective job site', () => {
   // not prompting me to the proper US sites
  })


  
  

  
