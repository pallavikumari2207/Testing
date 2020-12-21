package sample.bdd.hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksImpl {
	
	@Before
	public void setup(){
		System.out.println("Before w/o tag");
	}
	
	@After
	public void teardown(){
		System.out.println("After w/o tag");
	}
	@Before("@login")
	public void setupForReg(){
		System.out.println("Before with tag");
	}
	
	@After("@login")
	public void teardownForReg(){
		System.out.println("After with tag");
	}
}
