// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

describe("GivenInventory",
  function () {
    var fakeScribe = new Output.FakeScribe();
    var inventory = new CarLot.Inventory({ _vehicles: [{ _id: 1, _name: "Pinto" }] }, fakeScribe);

    it("WhenAskingToRender_ThenItShouldInscribe",
      function () {
        inventory.render("#id");
        expect(fakeScribe.inscriptions().length).toEqual(2);
      });
  });

describe("GivenVehicle",
  function () {
    var vehicle = new CarLot.Vehicle({ _id: 1, _name: "Pinto" });

    it("WhenAskingPrimaryKey_ThenItShouldReturnCorrectPrimaryKey",
      function () {
        expect(vehicle.primaryKey()).toEqual(1);
      });

    it("WhenAskingDescription_ThenItShouldReturnCorrectDescription",
      function () {
        expect(vehicle.description()).toEqual("Pinto");
      });
  });

// ReSharper restore PossiblyUnassignedProperty
// ReSharper restore UseOfImplicitGlobalInFunctionScope