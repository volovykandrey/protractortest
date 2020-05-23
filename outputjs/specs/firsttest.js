"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var app_manager_1 = __importDefault(require("../app_manager"));
describe("Calculator test", function () {
    var app = new app_manager_1.default();
    beforeAll(function () {
        protractor_1.browser.get("https://app-qatest306.sse.signalvine.com/");
        protractor_1.browser.driver.manage().window().maximize();
    });
    it("Launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Signal Vine Login");
    });
    it("Log In", function () {
        app.login.performLogIn();
    });
});
