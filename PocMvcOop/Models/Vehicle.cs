using Newtonsoft.Json;

namespace PocMvcOop.Models
{
    public interface IVehicle
    {
        string ToString();
    }

    public class Vehicle : IVehicle
    {
        public Vehicle(int id, int year, string make, string model, decimal price, bool sold = false)
        {
            _id = id;
            _year = year;
            _make = make;
            _model = model;
            _price = price;
            _sold = sold;
        }

        [JsonProperty] private readonly int _id;
        [JsonProperty] private readonly int _year;
        [JsonProperty] private readonly string _make;
        [JsonProperty] private readonly string _model;
        [JsonProperty] private readonly decimal _price;
        [JsonProperty] private readonly bool _sold;

        public override string ToString()
        {
            const string soldAddend = " - SOLD!";
            string sold = _sold ? soldAddend : string.Empty;

            return $"{_id} : {_year} {_make} {_model}{sold}, {_price:C}";
        }
    }
}