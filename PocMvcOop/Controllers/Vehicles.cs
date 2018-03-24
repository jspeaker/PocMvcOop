using Microsoft.AspNetCore.Mvc;

namespace PocMvcOop.Controllers
{
    public class Vehicles : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View("_Vehicles");
        }
    }
}