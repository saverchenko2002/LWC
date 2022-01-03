({
  doSearch: function (component, event, helper) {
    var componentEvent = component.getEvent("BeerEvent");
    var searchParam = component.find("enter-search").get("v.value");
    componentEvent.setParams({ searchText: searchParam });
    componentEvent.fire();
  }
});
