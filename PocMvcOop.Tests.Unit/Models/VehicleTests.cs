using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PocMvcOop.Models;

namespace PocMvcOop.Tests.Unit.Models
{
    [TestClass]
    public class VehicleTests
    {
        [TestMethod, TestCategory("Unit")]
        public void VehicleShouldFOo()
        {
            // arrange
            IVehicle vehicle = new Vehicle(1, "Le Car");

            // act
            string description = vehicle.ToString();

            // assert
            description.Should().Be("1 : Le Car");
        }
    }
}