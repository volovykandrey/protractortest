import { browser, element, by } from "protractor";
import AppManager from "../app_manager";

describe("Calculator test", function(){
    let app = new AppManager()
    beforeAll(function(){
        browser.get("https://app-qatest306.sse.signalvine.com/")
        browser.driver.manage().window().maximize()
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Signal Vine Login")
    })

    it("Log In", function(){
        app.login.performLogIn()
        })

})