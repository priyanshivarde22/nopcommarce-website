const locators = {
    'clickLogin': `[class='ico-login']`,
    'enterEmail': `#Email`,
    'enterPassword':`#Password`,
    'clickLoginBtn':`[class='button-1 login-button']`
}
class login{

    static clickLogin(){
        return $(locators.clickLogin)
    }
    static enterEmail(){
        return $(locators.enterEmail)
    }
    static enterPassword(){
        return $(locators.enterPassword)
    }
    static clickLoginBtn(){
        return $(locators.clickLoginBtn)
    }
}

module.exports = login