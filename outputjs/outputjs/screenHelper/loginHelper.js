"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var LoginHelper = /** @class */ (function () {
    function LoginHelper() {
    }
    LoginHelper.loginField = protractor_1.element(protractor_1.by.name("q"));
    return LoginHelper;
}());
