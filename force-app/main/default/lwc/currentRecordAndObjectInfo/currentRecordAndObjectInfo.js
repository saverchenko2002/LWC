import { LightningElement, api } from "lwc";
import USER_ID from "@salesforce/user/Id";

export default class CurrentRecordAndObjectInfo extends LightningElement {
  userId = USER_ID;
  @api recordId;
  @api objectApiName;
}
