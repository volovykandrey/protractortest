import {Config, browser} from "protractor"

export let config: Config = {
    framework : "jasmine",

    capabilities:{
        browserName : 'chrome'
    },

    specs:['./specs/firsttest.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub'
}