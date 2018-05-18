// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

/// <reference path="../dependencies/jquery-3.3.1.min.js" />

/// <reference path="../../../PocMvcOop/wwwroot/scripts/output.js" />
/// <reference path="../../../PocMvcOop/wwwroot/scripts/carlot.js" />

/// <reference path="../scripts/fakes/fake-scribe.js" />
/// <reference path="../scripts/fakes/fake-archivist.js" />
/// <reference path="../scripts/fakes/intl-polyfill.js" />

describe("GivenInventory",
  function () {
    CarLot.init($);
    var id = 1;
    var fakeScribe = new Output.FakeScribe();
    var fakeArchivist = new Output.FakeArchivist();
    var inventory = new CarLot.Inventory({ _vehicles: [{ _id: id, _year: 1972, _make: "Ford", _model: "Pinto", _price: 1234.56, _sold: true }] }, fakeScribe, fakeArchivist);

    it("WhenAskingToRender_ThenItShouldInscribe",
      function () {
        inventory.render("#id");
        expect(fakeScribe.inscriptions().length).toEqual(3);
      });
  });

describe("GivenEmptyInventory",
  function () {
    CarLot.init($);
    var fakeScribe = new Output.FakeScribe();
    var fakeArchivist = new Output.FakeArchivist();
    var inventory = new CarLot.Inventory({ _vehicles: [] }, fakeScribe, fakeArchivist);

    it("WhenAskingToRender_ThenItShouldClearAndNotInscribe",
      function () {
        inventory.render("#id");
        expect(fakeScribe.inscriptions().length).toEqual(0);
      });
  });

describe("GivenVehicle",
  function () {
    CarLot.init($);
    var id = 1;
    var fakeScribe = new Output.FakeScribe();
    var fakeArchivist = new Output.FakeArchivist();
    var vehicle = new CarLot.Vehicle({ _id: id, _year: 1972, _make: "Ford", _model: "Pinto", _price: 1234.56, _sold: true }, fakeScribe, fakeArchivist);

    beforeEach(function() {
      fakeArchivist.cacheData([]);
    });

    it("WhenAskingToRender_ThenItShouldInscribe",
      function () {
        vehicle.render("#id");
        expect(fakeScribe.inscriptions().length).toEqual(3);
      });

    it("WhenAskingToRender_ThenItShouldCache",
      function () {
        vehicle.render("#id");
        expect(fakeArchivist.cacheData().length).toEqual(1);
      });
  });

// code-integration
describe("GivenRealScribeAndSoldVehicle",
  function () {
    CarLot.init($);
    var id = 1;
    var scribe = new Output.HtmlScribe($);
    var fakeArchivist = new Output.FakeArchivist();
    var vehicle = new CarLot.Vehicle({ _id: id, _year: 1972, _make: "Ford", _model: "Pinto", _price: 1234.56, _sold: true }, scribe, fakeArchivist);

    it("WhenAskingToRender_ThenItShouldInscribe",
      function () {
        vehicle.render("body");
        var vehicleRow = $("#vehicle-pk-" + id);
        expect($(vehicleRow.find("td")[0]).html()).toEqual("1972 Ford Pinto - SOLD!");
      });
  });

// code-integration
describe("GivenRealScribeAndNotSoldVehicle",
  function () {
    CarLot.init($);
    var id = 1;
    var scribe = new Output.HtmlScribe($);
    var fakeArchivist = new Output.FakeArchivist();
    var vehicle = new CarLot.Vehicle({ _id: id, _year: 1972, _make: "Ford", _model: "Pinto", _price: 1234.56, _sold: false }, scribe, fakeArchivist);

    it("WhenAskingToRender_ThenItShouldInscribe",
      function () {
        vehicle.render("body");
        var vehicleRow = $("#vehicle-pk-" + id);
        expect($(vehicleRow.find("td")[0]).html()).toEqual("1972 Ford Pinto");
      });
  });

afterEach(function() {
  $("#vehicle-pk-1").remove();
});

// ReSharper restore PossiblyUnassignedProperty
// ReSharper restore UseOfImplicitGlobalInFunctionScope