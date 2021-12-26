import { LightningElement } from "lwc";

export default class GetterDemo extends LightningElement {
  title = "This is a getter power";
  selectedButton = "OFF";

  get getTitle() {
    return this.title.toUpperCase();
  }

  get getBoxStatus() {
    // return this.selectedButton === "ON" ? "box green" : "box red";
    return `box ${this.selectedButton === "ON" ? "green" : "red"}`;
  }

  clickHandler(event) {
    console.log(event.currentTarget.innerText);
    this.selectedButton = event.currentTarget.innerText;
  }
}
