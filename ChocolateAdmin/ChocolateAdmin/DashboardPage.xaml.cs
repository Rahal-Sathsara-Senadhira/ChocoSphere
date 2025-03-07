using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using LiveCharts;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChocolateAdmin
{
    public partial class DashboardPage : Page
    {
        public ChartValues<int> SalesData { get; set; }
        public List<string> ProductLabels { get; set; }
        public DashboardPage()
        {
            InitializeComponent();
            LoadMetrics();
            //LoadRecentOrders();
            // Dummy data: Product names and their sales today
            ProductLabels = new List<string> { "Diary Milk", "Tobleron", "F Rocher", "Bounty","Twix" };
            SalesData = new ChartValues<int> { 25, 40, 30, 20,15 };

            // Set data context for binding
            DataContext = this;
        }

        private void LoadMetrics()
        {
            try
            {
                // Fetch total orders
                var ordersCollection = App.MongoDBHelper.GetCollection<Order>("Orders");
                var totalOrders = ordersCollection.CountDocuments(new BsonDocument());
                TotalOrdersText.Text = totalOrders.ToString();

                // Fetch total revenue
                var totalRevenue = ordersCollection.Find(_ => true).ToList().Sum(o => o.TotalPrice);
                TotalRevenueText.Text = totalRevenue.ToString("C");

                // Fetch total customers
                var customersCollection = App.MongoDBHelper.GetCollection<Customer>("Customers");
                var totalCustomers = customersCollection.CountDocuments(new BsonDocument());
                TotalCustomersText.Text = totalCustomers.ToString();

                // Fetch total products
                var productsCollection = App.MongoDBHelper.GetCollection<Product>("Products");
                var totalProducts = productsCollection.CountDocuments(new BsonDocument());
                TotalProductsText.Text = totalProducts.ToString();
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading metrics: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

       /*private void LoadRecentOrders()
        {
            try
            {
                // Fetch recent orders (last 10 orders)
                var ordersCollection = App.MongoDBHelper.GetCollection<Order>("Orders");

                // Fetch all orders and sort in memory
                var allOrders = ordersCollection.Find(_ => true).ToList();

                // Sort by the embedded timestamp in ObjectId (most recent first)
                var recentOrders = allOrders
                    .OrderByDescending(o => o.Id.CreationTime) // Sort in memory
                    .Take(10) // Limit to 10 orders
                    .ToList();

                // Bind recent orders to the DataGrid
                RecentOrdersDataGrid.ItemsSource = recentOrders;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading recent orders: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }*/
    }
}