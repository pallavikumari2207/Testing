package sample.bdd.definition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sample.bdd.config.WebDrivers;


public class StepDefinitions {
	private WebDriver driver;


	@Given("^launch chrome$")
	public void launch_chrome() throws Throwable {
		
		System.out.println("launching chrome");
		driver=WebDrivers.webConfig();
		driver.get("https://www.phptravels.net/home");
			
       driver.manage().window().maximize();			
 
	}
    
	
    @Given("^application is launched$")
    public void application_is_launched() throws Throwable {
    	System.out.println("Get Page title ==>" + driver.getTitle());
    }
    

    @And("^user go for SignUp$")
    public void user_go_for_signup() throws Throwable {
    	driver.findElement(By.xpath("//div[@class='dropdown dropdown-login dropdown-tab']/a")).click();
 		driver.findElement(By.xpath("//a[text()='Sign Up']")).click();
    }
    
    @When("^fill the details$")
    public void fill_the_details(List<String> details) throws Throwable {
    	
		
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(details.get(0));
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(details.get(1));
		driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(details.get(2));
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(details.get(3));
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(details.get(4));
		driver.findElement(By.xpath("//input[@name='confirmpassword']")).sendKeys(details.get(5));
      
    }
    
    @And("^user clicks signUp$")
    public void user_clicks_signup() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		js.executeScript("arguments[0].click()",
				driver.findElement(By.xpath("//button[@type='submit' and contains(text(),'Sign Up')]")));
		Thread.sleep(3000);
    }
    

    
    @Then("^redirect to account$")
    public void redirect_to_account() throws Throwable {
    	String actual = driver.findElement(By.xpath("//h3[contains(text(), 'Hi,')]")).getText();
		String expected = "Hi, pallavi kumari";
		//Assert.assertEquals(expected, actual);
		driver.quit();
    }
}
	

