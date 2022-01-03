({
  fireEvent: function (component, event, helper) {
    var compEvent = component.getEvent("CompEvent");
    alert("I am in source component");
    compEvent.fire();
  }
});
