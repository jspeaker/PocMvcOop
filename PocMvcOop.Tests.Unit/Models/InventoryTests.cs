using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PocMvcOop.Models;
using System.Collections.Generic;
using System.Linq;

namespace PocMvcOop.Tests.Unit.Models
{
    [TestClass]
    public class InventoryTests
    {
        [TestMethod, TestCategory("Unit")]
        public void InventoryShouldReturnDescriptions()
        {
            // arrange
            IInventory inventory = new Inventory(new List<IVehicle>
            {
                new Vehicle(1, 1974, "AMC", "Pacer", 4999.99m)
            });

            // act
            List<string> vehicleDescriptions = inventory.VehicleDescriptions();

            // assert
            vehicleDescriptions.Should().HaveCount(1);
            vehicleDescriptions.Single().Should().Be("1 : 1974 AMC Pacer, $4,999.99");
        }
    }
}