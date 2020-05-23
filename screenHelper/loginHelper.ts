import { browser, element, by } from "protractor";

class LoginHelper{
    public static loginField = element(by.id("username"))
    public static passwordField = element(by.id("password"))
    public static logInButton = element(by.xpath("//button[contains(.,'Log In')]"))
    public static logo = element(by.xpath("//h1[@id='logo']"))
    public static error = element(by.xpath("[class='error']"))

}

