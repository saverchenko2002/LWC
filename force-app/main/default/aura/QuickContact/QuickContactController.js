({
  doSave: function (component, event, helper) {
    var action = component.get("c.createContact");
    action.setParams({
      contact: component.get("v.createContact"),
      accountId: component.get("v.accountId")
    });
    action.setCallback(
      this,
      function (response) {
        alert(response.getState());
        if (state === "SUCCESS" || state === "DRAFT") {
          var responseValue = response.getReturnValue();
        } else if (state === "INCOMPLETE") {
        } else if (state === "ERROR") {
        }
      },
      "ALL"
    );
    $A.enqueueAction(action);
  }
});
