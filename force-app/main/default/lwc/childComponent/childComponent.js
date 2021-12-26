import { LightningElement, api } from "lwc";

export default class ChildComponent extends LightningElement {
  @api name = "Salesforce Troop";
  @api getName() {
    return this.name;
  }
}
