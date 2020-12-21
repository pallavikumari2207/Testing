package sample.bdd.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)				
@CucumberOptions(
		features="src/test/java/sample/bdd/faetures",
		glue={"sample.bdd.definition"},
		plugin={"pretty", "html:target/cucumber_report"},
		tags="@login",
		monochrome=true
		)
public class RunCucumberTest {

}
