import { LightningElement } from "lwc";

export default class NotifyChildComponentn extends LightningElement {
  showChildNotification = false;
  childHandler() {
    this.showChildNotification;
  }

  showNotifyParentHandler() {
    const selectEvent = new CustomEvent("show", { bubbles: true });
    this.dispatchEvent(selectEvent);
  }
}
