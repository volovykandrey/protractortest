import {element, by, browser, ExpectedConditions} from "protractor";
import MessageHelper from "./messageHelper";
import MainMenuHelper from "./mainMenuHelper";

export default class LoginHelper{
    public loginField = element(by.id("username"))
    public passwordField = element(by.id("password"))
    public logInButton = element(by.xpath("//button[contains(.,'Log In')]"))
    public logo = element(by.xpath("//h1[@id='logo']"))
    public error = element(by.xpath("[class='error']"))

    public performLogIn() {
        this.loginField.sendKeys("dev@signalvine.com")
        this.passwordField.sendKeys("Password123!")
        this.logInButton.click()
        return new MainMenuHelper();
    }

}

