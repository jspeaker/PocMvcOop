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
                new Vehicle(1, "Ferrari"),
                new Vehicle(2, "Lamborgini"),
                new Vehicle(3, "Pinto"),
                new Vehicle(4, "Gremlin")
            });
        }
    }
}