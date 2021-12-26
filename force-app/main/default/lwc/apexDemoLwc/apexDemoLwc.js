import { LightningElement, wire, api } from "lwc";
import getAccountList from "@salesforce/apex/accountController.getAccountList";
import getAccountById from "@salesforce/apex/accountController.getAccountById";
import getContactList from "@salesforce/apex/accountController.getContactList";
import getSObjectValue from "@salesforce/apex";

import NAME_FIELD from "@salesforce/schema/Account.Name";

export default class ApexDemoLwc extends LightningElement {
  result = null;
  contacts = null;
  @api recordId;

  get name() {
    return this.wiredAccount.data ? getSObjectValue(this.wiredAccount.data, NAME_FIELD) : "";
  }

  @wire(getAccountById, { accId: "$recordId" })
  wiredAccount;
  @wire(getAccountList)
  wireAccounts({ error, data }) {
    console.log(this.recordId);
    if (data) {
      this.result = data;
    }
    if (error) {
      console.error(error);
    }
  }
  consoleLog() {
    console.log(this.wiredAccount);
  }

  handleLoad() {
    getContactList()
      .then((result) => {
        this.contacts = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
