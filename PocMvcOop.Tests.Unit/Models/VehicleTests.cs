using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PocMvcOop.Models;

namespace PocMvcOop.Tests.Unit.Models
{
    [TestClass]
    public class VehicleTests
    {
        [TestMethod, TestCategory("Unit")]
        public void VehicleShouldFormatDescriptionCorrectly()
        {
            // arrange
            IVehicle vehicle = new Vehicle(1, 1981, "Renault", "Le Car", 1599.99m);

            // act
            string description = vehicle.ToString();

            // assert
            description.Should().Be("1 : 1981 Renault Le Car, $1,599.99");
        }

        [TestMethod, TestCategory("Unit")]
        public void SoldVehicleShouldFormatDescriptionCorrectly()
        {
            // arrange
            IVehicle vehicle = new Vehicle(1, 1981, "Renault", "Le Car", 1599.99m, true);

            // act
            string description = vehicle.ToString();

            // assert
            description.Should().Be("1 : 1981 Renault Le Car - SOLD!, $1,599.99");
        }
    }
}