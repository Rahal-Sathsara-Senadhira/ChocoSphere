using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ChocolateAdmin
{
    public class Order
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string CustomerName { get; set; } = string.Empty;
        public Dictionary<string, int> Products { get; set; } = new();
        public string Address { get; set; } = string.Empty;
        public decimal TotalPrice { get; set; }
        public string Status { get; set; } = string.Empty;

        [BsonIgnore]
        public string ProductsDisplay => string.Join(", ", Products.Select(p => $"{p.Key} (x{p.Value})"));
    }
}