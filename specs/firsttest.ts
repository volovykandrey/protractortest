import { brotliCompress } from "zlib";
import { browser, element, by } from "protractor";

describe("Calculator test", function(){

    beforeEach(function(){
        browser.get("https://app-qatest306.sse.signalvine.com/")
        browser.driver.manage().window().maximize();
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Signal Vine Login")
    })

    it("Log In", function(){
        element(by.id("username")).sendKeys("dev@signalvine.com")
        element(by.id("password")).sendKeys("Password123!")
        element(by.xpath("//button[contains(.,'Log In')]")).click
        })

    it("Log In", function(){
            element(by.id("username")).sendKeys("dev@signalvine.com")
            element(by.id("password")).sendKeys("Password123!")
            element(by.xpath("//button[contains(.,'Log In')]")).click
        })

    var hui = by.id("username")
    var hu2 = 7


})