const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://mail.google.com/mail/u/0/#category/social');
    
    await driver.manage().setTimeouts({implicit: 500});
  
    let checkBox = await driver.findElement(By.className('oZ-jc T-Jo J-J5-Ji '));
    await checkBox.click()
    // let submitButton = await driver.findElement(By.css('button'));
  
    // await textBox.sendKeys('Selenium');
    // await submitButton.click();
  
  } catch (e) {
    console.log(e)
  } finally {
    // await driver.quit();
  }
}())

// class="oZ-jc T-Jo J-J5-Ji "
