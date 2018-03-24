using Microsoft.AspNetCore.Mvc;
using PocMvcOop.Providers;

namespace PocMvcOop.Controllers
{
    public class Vehicle : Controller
    {
        private readonly ICarLot _carLot;

        public Vehicle() : this(new CarLot()) { }

        private Vehicle(ICarLot carLot)
        {
            _carLot = carLot;
        }

        [HttpGet, Route("/carlot/vehicle")]
        public IActionResult VehicleList()
        {
            return Json(_carLot.Inventory());
        }
    }
}