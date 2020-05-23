import { brotliCompress } from "zlib";
import { browser, element, by } from "protractor";

describe("Calculator test", function(){

    beforeAll(function(){
        browser.get("https://app-qatest306.sse.signalvine.com/")
        browser.driver.manage().window().maximize();
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Signal Vine Login")
    })

    it("Log In", function(){
        var el = element(by.id("username"));
        el.sendKeys("dev@signalvine.com")
        element(by.id("password")).sendKeys("Password123!")
        element(by.xpath("//button[contains(.,'Log In')]")).click()
        })

})