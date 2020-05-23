"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Calculator test", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://app-qatest306.sse.signalvine.com/");
        protractor_1.browser.driver.manage().window().maximize();
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Signal Vine Login");
    });
    it("Log In", function () {
        protractor_1.element(protractor_1.by.id("username")).sendKeys("dev@signalvine.com");
        protractor_1.element(protractor_1.by.id("password")).sendKeys("Password123!");
        protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Log In')]")).click;
    });
    it("Log In", function () {
        protractor_1.element(protractor_1.by.id("username")).sendKeys("dev@signalvine.com");
        protractor_1.element(protractor_1.by.id("password")).sendKeys("Password123!");
        protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Log In')]")).click;
    });
    var hui = protractor_1.by.id("username");
    var hu2 = 7;
});
