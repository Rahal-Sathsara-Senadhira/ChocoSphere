using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChocolateAdmin
{
    public class Expense
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string Description { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
}