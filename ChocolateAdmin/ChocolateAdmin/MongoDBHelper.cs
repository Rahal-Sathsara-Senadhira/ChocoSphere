using MongoDB.Driver;

namespace ChocolateAdmin
{
    public class MongoDBHelper
    {
        private readonly IMongoDatabase _database;

        public MongoDBHelper(string connectionString, string databaseName)
        {
            var settings = MongoClientSettings.FromConnectionString(connectionString);
            settings.ConnectTimeout = TimeSpan.FromSeconds(60);
            settings.ServerSelectionTimeout = TimeSpan.FromSeconds(60);
            settings.SocketTimeout = TimeSpan.FromSeconds(60);

            var client = new MongoClient(settings);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
}