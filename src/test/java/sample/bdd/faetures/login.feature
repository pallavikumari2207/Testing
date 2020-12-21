Feature: verification of login
Background: launching chrome
Given user want to test any feature
Then launch driver
@login
Scenario: login with proper credential
Given user clicks login
Then enter "pallavijha0722@gmail.com" and "pallavi123"
Then user click login
