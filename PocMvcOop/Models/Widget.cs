using Newtonsoft.Json;

namespace PocMvcOop.Models
{
    public interface IVehicle
    {
        string ToString();
    }

    public class Vehicle : IVehicle
    {
        public Vehicle(int id, string name)
        {
            _id = id;
            _name = name;
        }

        [JsonProperty]
        private readonly int _id;

        [JsonProperty]
        private readonly string _name;

        public override string ToString()
        {
            return $"{_id} : {_name}";
        }
    }
}