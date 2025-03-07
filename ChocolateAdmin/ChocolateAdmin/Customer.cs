using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChocolateAdmin
{
    public class Customer
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
    }
}