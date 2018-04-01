var CarLot = CarLot || {};

CarLot.init = function (domAccess, callback) {
  this.domAccess = domAccess;

  callback && callback();
};

CarLot.Vehicle = function (vehicle, scribe, archivist, formatter) {
  if (!scribe || !archivist) return new arguments.callee(vehicle, new Output.HtmlScribe(CarLot.domAccess), new Output.Archivist(CarLot.domAccess));
  if (!formatter) return new arguments.callee(vehicle, scribe, archivist, new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }));
  if (!(this instanceof arguments.callee)) return new arguments.callee(vehicle, scribe, archivist, formatter);

  var primaryKey = function () {
    return "vehicle-pk-" + vehicle._id;
  };

  var render = function (targetSelector) {
    var sold = vehicle._sold ? " - SOLD!" : "";
    var description = vehicle._year + " " + vehicle._make + " " + vehicle._model + sold;

    scribe.inscribe(targetSelector, "tr", primaryKey(), "", "");
    scribe.inscribe("#" + primaryKey(), "td", "", "", description);
    scribe.inscribe("#" + primaryKey(), "td", "", "", formatter.format(vehicle._price));
    archivist.cache(primaryKey(), "vehicle", this);
  };

  return {
    render: render
  };
};

CarLot.Inventory = function (inventory, scribe, archivist) {
  if (!scribe || !archivist) return new arguments.callee(inventory, new Output.HtmlScribe(CarLot.domAccess), new Output.Archivist(CarLot.domAccess));
  if (!(this instanceof arguments.callee)) return new arguments.callee(inventory, scribe, archivist);

  var vehicles = [];
  for (var index = 0; index < inventory._vehicles.length; index += 1) {
    vehicles.push(new CarLot.Vehicle(inventory._vehicles[index], scribe, archivist));
  }

  var render = function (targetSelector) {
    scribe.clear(targetSelector + " tbody");
    for (var index = 0; index < inventory._vehicles.length; index += 1) {
      vehicles[index].render(targetSelector);
    }
  };

  return {
    render: render
  };
};
