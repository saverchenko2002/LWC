import { LightningElement, wire, api } from "lwc";
import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue
} from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_NAME_FIELD from "@salesforce/schema/Account.Owner.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

let FIELDS = ["Account.Name", "Account.Owner.Name", "Account.Industry"];
export default class GetRecordDemo extends LightningElement {
  @api recordId;
  //   result = {};
  @wire(getRecord, {
    recordId: "$recordId",
    fields: FIELDS
  })
  account;

  get name() {
    return getFieldValue(this.account.data, NAME_FIELD);
  }
  get owner() {
    return getFieldValue(this.account.data, OWNER_NAME_FIELD);
  }
  get industry() {
    return getFieldDisplayValue(this.account.data, INDUSTRY_FIELD);
  }
  //   wiredRecord({ error, data }) {
  //     if (data) {
  //       const { fields } = data;
  //       Object.keys(fields).forEach((item) => {
  //         let value =
  //           fields[item] && fields[item].displayValue
  //             ? fields[item].displayValue
  //             : fields[item].value;
  //         this.result = { ...this.result, [item]: value };
  //       });

  //       console.log(this.result);
  //     }
  //     if (error) {
  //       console.error(error);
  //     }
  //   }
}
