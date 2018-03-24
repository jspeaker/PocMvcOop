using Microsoft.AspNetCore.Mvc;
using PocMvcOop.Models;
using PocMvcOop.Providers;
using System.Diagnostics;

namespace PocMvcOop.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICarLot _carLot;

        public HomeController() : this(new CarLot()) { }

        private HomeController(ICarLot carLot)
        {
            _carLot = carLot;
        }

        public IActionResult Index()
        {
            return View(_carLot.Inventory());
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
