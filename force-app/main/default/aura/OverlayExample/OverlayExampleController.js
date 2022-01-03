({
  createModal: function (component, event, helper) {
    component.find("overlayLib").showCustomModal({
      header: "Application Confirmation",
      body: "This is test",
      footer: "Footer",
      showCloseButton: true,
      closeCallback: function () {
        alert("You closed the alert!");
      }
    });
  },
  handleNavigate: function (component, event, helper) {
    var pageReference = component.find("navigation");

    var pageReferenceBody = {
      type: "standard__component",
      attributes: {
        componentName: "c__BeerExplorer"
      },
      state: {
        myAttr: "attrValue"
      }
    };

    pageReference.navigate(pageReferenceBody);
  },

  createButton: function (component, event, helper) {
    $A.createComponent(
      "lightning:button",
      { label: "Hi am new button", onclick: component.getReference("c.createButton") },
      function (newButton, status, errorMessage) {
        alert(status);
        if (status === "SUCCESS") {
          var body = component.get("v.body");
          body.push(newButton);
          component.set("v.body", body);
        }
      }
    );
  }
});
