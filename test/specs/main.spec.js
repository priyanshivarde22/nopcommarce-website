const register = require("../pages/register");
const login = require("../pages/login");
const genEmail = require('../helpers/generateEmail');




describe("You are automating Juice shop", async function(){
    var email = genEmail;

    it("Youa are creating account..", async function(){
    await browser.url("/");
    await register.clickRegister().click();
    await register.selectGender().click();
    await register.FirstName().setValue("Priyam");
    await register.lastName().setValue("Patel");
    await register.clickDate().click();
    await register.selectDate().click();
    await register.clickMonth().click();
    await register.selectMonth().click();
    await register.clickYear().click();
    await register.selectYear().click();
    await register.email().setValue(email);
    await register.companyNmae().setValue("testcompany");
    await register.newsLetterCheckBox().click();
    await register.password().setValue("test@123");
    await register.confirmPassword().setValue("test@123");
    await register.clickRegisterBtn().click();
     await driver.pause(1000)
    });

    it("You are creating account..", async function(){
        await login.clickLogin().click();
        await login.enterEmail().setValue(email);
        await login.enterPassword().setValue("test@123");
        await login.clickLoginBtn().click();
        await driver.pause(1000)
    });
});