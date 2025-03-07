using System.Windows;

namespace ChocolateAdmin
{
    public partial class App : Application
    {
        public static MongoDBHelper MongoDBHelper { get; private set; } = null!;

        protected override void OnStartup(StartupEventArgs e)
        {
            string connectionString = "mongodb+srv://sathsara:123@choco.hrx0s.mongodb.net/?retryWrites=true&w=majority&appName=choco";
            string databaseName = "ChocolateAdmin";
            MongoDBHelper = new MongoDBHelper(connectionString, databaseName);

            base.OnStartup(e);
        }
    }
}