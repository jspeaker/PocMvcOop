using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace PocMvcOop.Models
{
    public interface IInventory
    {
        List<string> VehicleDescriptions();
    }

    public class Inventory : IInventory
    {
        public Inventory(List<IVehicle> vehicles)
        {
            _vehicles = vehicles;
        }

        [JsonProperty] private readonly List<IVehicle> _vehicles;

        public List<string> VehicleDescriptions()
        {
            return new List<string>(_vehicles.Select(vehicle => vehicle.ToString()));
        }
    }
}