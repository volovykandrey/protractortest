import { brotliCompress } from "zlib";
import { browser, element, by } from "protractor";
export class AppManager{} 

describe("Calculator test", function(){
    let app = new AppManager()

    beforeAll(function(){
        let app = new AppManager()
        app
        browser.get("https://app-qatest306.sse.signalvine.com/")
        browser.driver.manage().window().maximize();
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Signal Vine Login")
    })

    it("Log In", function(){
        var el = element(by.id("username"));
        el.sendKeys("dev@signalvine.com")
        app..password.sendKeys("Password123!")
        element(by.xpath("//button[contains(.,'Log In')]")).click
        })

})