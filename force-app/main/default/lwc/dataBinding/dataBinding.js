import { LightningElement, track } from "lwc";

export default class DataBinding extends LightningElement {
  fullname = "Salesforce troop";

  @track title = "Salesforce developer";

  changeHandler(event) {
    this.title = event.target.value;
    console.log(this.title);
  }
}
