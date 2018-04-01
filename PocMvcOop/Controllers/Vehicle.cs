using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using PocMvcOop.Providers;

namespace PocMvcOop.Controllers
{
    public class Vehicle : Controller
    {
        private readonly ICarLot _carLot;

        public Vehicle(IMemoryCache memoryCache) : this(new CarLot(memoryCache)) { }

        private Vehicle(ICarLot carLot)
        {
            _carLot = carLot;
        }

        [HttpGet, Route("/api/carlot/vehicle")]
        public IActionResult VehicleList()
        {
            return Json(_carLot.Inventory());
        }
    }
}