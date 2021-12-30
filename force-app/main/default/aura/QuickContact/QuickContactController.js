({
  doSave: function (component, event, helper) {
    var validContact = component.find("contactForm").reduce(function (validSoFar, inputCmp) {
      //   inputCmp.showHelpMessageIfInvalid();
      console.log(inputCmp.get("v.validity").valid);
      return validSoFar && inputCmp.get("v.validity").valid;
    }, true);

    console.log("res " + validContact);

    // var action = component.get("c.createContact");
    // action.setParams({
    //   contact: component.get("v.createContact"),
    //   accountId: component.get("v.accountId")
    // });
    // action.setCallback(
    //   this,
    //   function (response) {
    //     var state = response.getState();
    //     if (state === "SUCCESS" || state === "DRAFT") {
    //       var responseValue = response.getReturnValue();
    //     } else if (state === "INCOMPLETE") {
    //     } else if (state === "ERROR") {
    //       console.log("////");
    //       var errors = response.getError();
    //       console.log(errors);
    //       console.log(JSON.stringify(errors));
    //     }
    //   },
    //   "ALL"
    // );
    // $A.enqueueAction(action);
  }
});
