import {browser, element, by} from "protractor";

export default class MessageHelper {
    public newMessageButton = element(by.css("[data-e2e=newMessageBtn]"))

    public clickOnTheNewMessageButton() {
        this.newMessageButton.click();
    }
}