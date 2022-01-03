({
  executeEvent: function (component, event, helper) {
    alert("I'm in application source");
    var applicationEvent = $A.get("e.c:ApplicationEvent");
    applicationEvent.fire();
  }
});
