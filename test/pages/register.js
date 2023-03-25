const locators = {
    'clickRegister': `[class='ico-register']`,
    'selectGender': `//label[text()='Male']`,
    'FirstName':`#FirstName`,
    'lastName':`#LastName`,
    'clickDate':`[name='DateOfBirthDay']`,
    'selectDate':`//option[text()='2']`,
    'clickMonth':`[name='DateOfBirthMonth']`,
    'selectMonth':`//option[text()='March']`,
    'clickYear':`[name='DateOfBirthYear']`,
    'selectYear':`//option[text()='1999']`,
    'email':`#Email`,
    'companyNmae':`#Company`,
    'newsLetterCheckBox': `[data-val-required='The Newsletter field is required.']`,
    'password':`#Password`,
    'confirmPassword':`#ConfirmPassword`,
    'clickRegisterBtn':`#register-button`
}
class register{

    static clickRegister(){
        return $(locators.clickRegister)
    }
    static selectGender(){
        return $(locators.selectGender)
    }
    static FirstName(){
        return $(locators.FirstName)
    }
    static lastName(){
        return $(locators.lastName)
    }
    static clickDate(){
        return $(locators.clickDate)
    }
    static selectDate(){
        return $(locators.selectDate)
    }
    static clickMonth(){
        return $(locators.clickMonth)
    }
    static selectMonth(){
        return $(locators.selectMonth)
    }
    static clickYear(){
        return $(locators.clickYear)
    }
    static selectYear(){
        return $(locators.selectYear)
    }
    static email(){
        return $(locators.email)
    }
    static companyNmae(){
        return $(locators.companyNmae)
    }
    static newsLetterCheckBox(){
        return $(locators.newsLetterCheckBox)
    }
    static password(){
        return $(locators.password)
    }
    static confirmPassword(){
        return $(locators.confirmPassword)
    }
    static clickRegisterBtn(){
        return $(locators.clickRegisterBtn)
    }
}

module.exports = register