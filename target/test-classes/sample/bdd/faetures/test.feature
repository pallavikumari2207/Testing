Feature: verification of registration				


@Registration
Scenario: Registering new user 
Given  launch chrome	
Given application is launched
And user go for SignUp
When fill the details
|pallavi|kumari|8210803823|pallavijha0722@gmail.com|pallavi123|pallavi123|
And user clicks signUp
Then redirect to account