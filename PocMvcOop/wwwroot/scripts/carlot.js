﻿var CarLot = CarLot || {};
CarLot.Vehicle = function (vehicle) {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(vehicle);
  // ReSharper restore CallerCalleeUsing

  var id = vehicle._id;
  var name = vehicle._name;

  var primaryKey = function () {
    return id;
  };

  var description = function () {
    return name;
  };

  return {
    primaryKey: primaryKey,
    description: description
  };
};

CarLot.Inventory = function (inventory, scribe) {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(inventory);
  // ReSharper restore CallerCalleeUsing

  var vehicles = [];
  for (var index = 0; index < inventory._vehicles.length; index += 1) {
    vehicles.push(new CarLot.Vehicle(inventory._vehicles[index]));
  }

  var render = function (targetSelector) {
    scribe.clear(targetSelector + " tbody");
    for (var index = 0; index < inventory._vehicles.length; index += 1) {
      var vehicle = vehicles[index];
      scribe.inscribe(targetSelector, "tr", vehicle.primaryKey(), "", "");
      scribe.inscribe("#" + vehicle.primaryKey(), "td", "", "", vehicle.description());
    }
  };

  return {
    render: render
  };
};

var Output = Output || {};
Output.HtmlScribe = function (domAccess) {
  // ReSharper disable CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(domAccess);
  // ReSharper restore CallerCalleeUsing

  var clear = function (target) {
    domAccess(target).html("");
  };

  var setAttribute = function (element, attribute, value) {
    if (value === undefined || value === null || value === "") return;
    domAccess(element).attr(attribute, value);
  };

  var createElement = function (tag, content, id, cssClass) {
    var element = domAccess("<" + tag + ">" + content + "</" + tag + ">");
    setAttribute(element, "id", id);
    setAttribute(element, "class", cssClass);
    return element;
  };

  var inscribe = function (target, tag, id, cssClass, content) {
    domAccess(createElement(tag, content, id, cssClass)).appendTo(target);
  };

  return {
    clear: clear,
    inscribe: inscribe
  };
};
