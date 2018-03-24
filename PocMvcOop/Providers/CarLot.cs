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
            return new Inventory(new List<IWidget>
            {
                new Widget(1, "Ferrari"),
                new Widget(2, "Lamborgini"),
                new Widget(3, "Pinto"),
                new Widget(4, "Gremlin")
            });
        }
    }
}