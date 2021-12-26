import { LightningElement, wire } from "lwc";
import {
  getPicklistValuesByRecordType,
  getObjectInfo
} from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
  picklistValue;
  shippingGeocodeAccuracy;
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfo;
  @wire(getPicklistValuesByRecordType, {
    objectApiName: ACCOUNT_OBJECT,
    recordTypeId: "$objectInfo.data.defaultRecordTypeId"
  })
  accountPicklists({ error, data }) {
    if (data) {
      console.log(data);
      this.shippingGeocodeAccuracy =
        data.picklistFieldValues.ShippingGeocodeAccuracy.values;
    }
    if (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    this.picklistValue = event.target.value;
  }
}
