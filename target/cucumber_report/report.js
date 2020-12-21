$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "verification of login",
  "description": "",
  "id": "verification-of-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "launching chrome",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user want to test any feature",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "launch driver",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_want_to_test_any_feature()"
});
formatter.result({
  "duration": 984654300,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefinition.launch_driver()"
});
formatter.result({
  "duration": 48565186800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "login with proper credential",
  "description": "",
  "id": "verification-of-login;login-with-proper-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user clicks login",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter \"pallavijha0722@gmail.com\" and \"pallavi123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_clicks_login()"
});
formatter.result({
  "duration": 1006544500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027dropdown dropdown-login dropdown-tab\u0027]/a\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027SHUBHAM\u0027, ip: \u0027192.168.29.119\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\SHUBHAM\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:3050}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fa87586304b843253a80d9ea73a79f62\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027dropdown dropdown-login dropdown-tab\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:396)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat sample.bdd.definition.LoginDefinition.user_clicks_login(LoginDefinition.java:29)\r\n\tat ✽.Given user clicks login(login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pallavijha0722@gmail.com",
      "offset": 7
    },
    {
      "val": "pallavi123",
      "offset": 38
    }
  ],
  "location": "LoginDefinition.enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinition.user_click_login()"
});
formatter.result({
  "status": "skipped"
});
});