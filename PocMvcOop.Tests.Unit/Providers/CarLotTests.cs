using FluentAssertions;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PocMvcOop.Models;
using PocMvcOop.Providers;
using System;
using System.Collections.Generic;

namespace PocMvcOop.Tests.Unit.Providers
{
    [TestClass]
    public class CarLotTests
    {
        [TestInitialize, TestCleanup]
        public void Cleaner()
        {
            IMemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            memoryCache.Remove("inventory");
        }

        [TestMethod]
        public void InventoryShouldReturnVehicles()
        {
            // arrange
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            ICarLot carLot = new CarLot(memoryCache);
            IInventory inventory = carLot.Inventory();

            // act
            List<string> vehicleDescriptions = inventory.VehicleDescriptions();

            // assert
            vehicleDescriptions.Should().HaveCount(6);
        }

        [TestMethod, TestCategory("Unit")]
        public void InventoryShouldCacheVehicles()
        {
            // arrange
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            ICarLot carLot = new CarLot(memoryCache);
            carLot.Inventory();

            // act // assert
            memoryCache.Get<IInventory>("inventory").VehicleDescriptions().Should().HaveCount(6);
        }

        [TestMethod, TestCategory("Unit")]
        public void InventoryShouldUseCachedVehicles()
        {
            // arrange
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            memoryCache.Set("inventory", new Inventory(new List<IVehicle>
            {
                new Vehicle(1, 1982, "Ford", "550 Bronco", 12425.95m)
            }), DateTimeOffset.Now.AddMinutes(1));



            ICarLot carLot = new CarLot(memoryCache);
            carLot.Inventory();

            // act // assert
            memoryCache.Get<IInventory>("inventory").VehicleDescriptions().Should().HaveCount(1);
        }
    }
}
