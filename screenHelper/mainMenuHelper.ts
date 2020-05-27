import {browser, element, by, ExpectedConditions} from "protractor";
import MessageHelper from "./messageHelper";

export default class MainMenuHelper {
    public messageTab = element(by.css('[data-e2e="messagesPageLink"]'))
    public messageTab1 = element(by.xpath('//a[contains(text(),"Messages")]'))

    public clickOnTheMessagesTab() {
        browser.waitForAngularEnabled(false)
        browser.wait(ExpectedConditions.visibilityOf(this.messageTab), 15000)
        this.messageTab.click()
        return new MessageHelper()
    }
}