package sample.bdd.definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import sample.bdd.config.WebDrivers;

public class LoginDefinition {
	private WebDriver driver;
	@Given("^user want to test any feature$")
	public void user_want_to_test_any_feature() throws Throwable {
		System.out.println("launching chrome");	
	}
	
	@Then("^launch driver$")
	public void launch_driver() throws Throwable {

		driver=WebDrivers.webConfig();
		driver.get("https://www.phptravels.net/home");
		  driver.manage().window().maximize();	
	
	}
	
	@Given("^user clicks login$")
	public void user_clicks_login() throws Throwable {
		driver.findElement(By.xpath("//div[@class='dropdown dropdown-login dropdown-tab']/a")).click();
 		driver.findElement(By.xpath("//a[text()='Login']")).click();
	}

	@Then("^enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String username, String password ) throws Throwable {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	  
	}

	@Then("^user click login$")
	public void user_click_login() throws Throwable {
		driver.findElement(By.xpath("//button[text()='Login']")).click();
	}

}

