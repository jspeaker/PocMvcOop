using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PocMvcOop.Models;
using PocMvcOop.Providers;
using System.Collections.Generic;

namespace PocMvcOop.Tests.Unit.Providers
{
    [TestClass]
    public class CarLotTests
    {
        [TestMethod]
        public void InventoryShouldReturnVehicles()
        {
            ICarLot carLot = new CarLot();
            IInventory inventory = carLot.Inventory();
            List<string> vehicleDescriptions = inventory.VehicleDescriptions();
            vehicleDescriptions.Should().HaveCount(5);
        }
    }
}
