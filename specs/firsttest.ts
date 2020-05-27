import {browser, element, by, WebDriver} from "protractor";
import AppManager from "../app_manager";

describe("First test", function(){
    let app = new AppManager()
    beforeAll(function(){
        browser.get("https://app-svc306.sse.signalvine.com/")
        browser.driver.manage().window().maximize()
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Signal Vine Login")
    })

    it("Log In", function(){
        app.login.performLogIn()
            .clickOnTheMessagesTab()
            .clickOnTheNewMessageButton()
            //WebDriver.prototype.sleep(7000)
        })
})