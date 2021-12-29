({
  doCreateMap: function (component, event, helper) {
    var map = [];
    for (var i = 0; i < 10; i++) {
      map = [...map, { key: i, value: `Test ${i}` }];
    }
    component.set("v.mapVar", map);
  }
});
