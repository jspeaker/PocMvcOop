using Microsoft.Extensions.Caching.Memory;
using PocMvcOop.Models;
using System;
using System.Collections.Generic;

namespace PocMvcOop.Providers
{
    public interface ICarLot
    {
        IInventory Inventory();
    }

    public class CarLot : ICarLot
    {
        private readonly IMemoryCache _memoryCache;

        public CarLot(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public IInventory Inventory()
        {
            const string cacheKey = "inventory";

            if (_memoryCache.TryGetValue(cacheKey, out IInventory cachedInventory)) return cachedInventory;

            Inventory inventory = new Inventory(new List<IVehicle>
            {
                new Vehicle(1, 2001, "Ferrari", "550 Barchetta", 129999.95m),
                new Vehicle(2, 2012, "Lamborghini", "Gallardo", 469995.95m),
                new Vehicle(3, 1972, "Ford", "Pinto", 4950m),
                new Vehicle(4, 1976, "AMC", "Gremlin", 11995.99m),
                new Vehicle(5, 1980, "Fiat", "124 Sport Spider", 9500m),
                new Vehicle(6, 1979, "Chevrolet", "Monte Carlo", 14900m)
            });

            _memoryCache.Set(cacheKey, inventory, DateTimeOffset.Now.AddHours(24));

            return inventory;
        }
    }
}