using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace PocMvcOop.Models
{
    public interface IInventory
    {
        List<string> VehicleDescriptions();
    }

    public class Inventory : IInventory
    {
        public Inventory(List<IWidget> widgets)
        {
            _widgets = widgets;
        }

        [JsonProperty] private readonly List<IWidget> _widgets;
        public List<string> VehicleDescriptions()
        {
            return new List<string>(_widgets.Select(w => w.ToString()));
        }
    }
}