using PocMvcOop.Models;
using System.Collections.Generic;

namespace PocMvcOop.Providers
{
    public interface ICarLot
    {
        IInventory Inventory();
    }

    public class CarLot : ICarLot
    {
        public IInventory Inventory()
        {
            return new Inventory(new List<IVehicle>
            {
                new Vehicle(1, "2001 Ferrari 550 Barchetta"),
                new Vehicle(2, "2012 Lamborghini Gallardo"),
                new Vehicle(3, "1972 Ford Pinto"),
                new Vehicle(4, "1976 AMC Gremlin"),
                new Vehicle(5, "1980 Fiat 124 Sport Spider")
            });
        }
    }
}