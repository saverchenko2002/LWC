({
  showInfo: function (component, event, helper) {
    var eventSource = event.getSource();
    var beerObj = eventSource.get("v.name");
    console.log(beerObj);
    component.set("v.beerId", beerObj);

    $A.createComponent("c:BeerDetails", { beerId: beerObj }, function (beerDetails, status, errorMessage) {
      if (status === "SUCCESS") {
        component.find("overlayLib").showCustomModal({
          header: "Beer Details",
          body: beerDetails,
          footer: "Footer",
          showCloseButton: true,
          closeCallback: function () {}
        });
      }
    });
  }
});
