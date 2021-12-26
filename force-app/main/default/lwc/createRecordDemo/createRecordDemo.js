import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import TYPE_FIELD from "@salesforce/schema/Account.Type";

export default class CreateRecordDemo extends LightningElement {
  formFields = {
    Name: "",
    Industry: "",
    Phone: "",
    Type: ""
  };

  changeHandler(event) {
    const { value, name } = event.target;
    this.formFields = { ...this.formFields, [name]: value };
  }

  handleSave() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.formFields.Name;
    fields[PHONE_FIELD.fieldApiName] = this.formFields.Phone;
    fields[INDUSTRY_FIELD.fieldApiName] = this.formFields.Industry;
    fields[TYPE_FIELD.fieldApiName] = this.formFields.Type;

    let recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    createRecord(recordInput)
      .then((result) => {
        this.formFields = {};
        console.log("Account created ID", JSON.stringify(result.id));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
