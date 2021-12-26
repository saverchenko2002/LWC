import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  name = "Salesforce Troop";
  getName() {
    return this.name;
  }
}
