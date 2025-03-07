using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChocolateAdmin
{
    public partial class OrderControlPage : Page
    {
        public OrderControlPage()
        {
            InitializeComponent();
            LoadOrders();
        }

        private void LoadOrders()
        {
            try
            {
                // Fetch orders from MongoDB
                var collection = App.MongoDBHelper.GetCollection<Order>("Orders");
                var orders = collection.Find(_ => true).ToList();

                // Bind orders to the DataGrid
                OrdersDataGrid.ItemsSource = orders;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading orders: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void StatusComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (OrdersDataGrid.SelectedItem is Order selectedOrder &&
                sender is ComboBox statusComboBox &&
                statusComboBox.SelectedItem is ComboBoxItem selectedStatus)
            {
                try
                {
                    // Update the order status in MongoDB
                    var collection = App.MongoDBHelper.GetCollection<Order>("Orders");
                    var filter = Builders<Order>.Filter.Eq(o => o.Id, selectedOrder.Id);
                    var update = Builders<Order>.Update.Set(o => o.Status, selectedStatus.Content.ToString());
                    collection.UpdateOne(filter, update);

                    MessageBox.Show("Order status updated successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                catch (MongoException ex)
                {
                    MessageBox.Show($"Error updating order status: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }

        private void DeleteButton_Click(object sender, RoutedEventArgs e)
        {
            if (OrdersDataGrid.SelectedItem is Order selectedOrder)
            {
                // Show confirmation dialog
                var result = MessageBox.Show("Are you sure you want to delete this order?", "Confirm Delete", MessageBoxButton.YesNo, MessageBoxImage.Question);

                if (result == MessageBoxResult.Yes)
                {
                    try
                    {
                        // Delete the order from MongoDB
                        var collection = App.MongoDBHelper.GetCollection<Order>("Orders");
                        var filter = Builders<Order>.Filter.Eq(o => o.Id, selectedOrder.Id);
                        collection.DeleteOne(filter);

                        MessageBox.Show("Order deleted successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                        // Reload orders
                        LoadOrders();
                    }
                    catch (MongoException ex)
                    {
                        MessageBox.Show($"Error deleting order: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    }
                }
            }
        }

        private void FilterButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Fetch all orders from MongoDB
                var collection = App.MongoDBHelper.GetCollection<Order>("Orders");
                var orders = collection.Find(_ => true).ToList();

                // Apply filters
                var filteredOrders = orders.AsQueryable();

                // Filter by customer name
                if (!string.IsNullOrWhiteSpace(SearchTextBox.Text))
                {
                    filteredOrders = filteredOrders.Where(o => o.CustomerName.Contains(SearchTextBox.Text, StringComparison.OrdinalIgnoreCase));
                }

                // Filter by status
                if (StatusFilterComboBox.SelectedItem is ComboBoxItem selectedStatus && selectedStatus.Content.ToString() != "All Statuses")
                {
                    filteredOrders = filteredOrders.Where(o => o.Status == selectedStatus.Content.ToString());
                }

                // Bind filtered orders to the DataGrid
                OrdersDataGrid.ItemsSource = filteredOrders.ToList();
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error filtering orders: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}