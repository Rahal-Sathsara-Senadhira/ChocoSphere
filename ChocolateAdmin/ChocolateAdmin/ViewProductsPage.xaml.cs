using MongoDB.Driver;
using System.Windows.Controls;
using System.Windows;

namespace ChocolateAdmin
{
    public partial class ViewProductsPage : Page
    {
        public ViewProductsPage()
        {
            InitializeComponent();
            LoadProducts();
        }

        private void LoadProducts()
        {
            try
            {
                var collection = App.MongoDBHelper.GetCollection<Product>("Products");
                var products = collection.Find(_ => true).ToList();
                ProductsDataGrid.ItemsSource = products;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading products: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}