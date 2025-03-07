using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChocolateAdmin
{
    public partial class CustomerDetailsPage : Page
    {
        public CustomerDetailsPage()
        {
            InitializeComponent();
            LoadCustomers();
        }

        private void LoadCustomers()
        {
            try
            {
                // Fetch customers from MongoDB
                var collection = App.MongoDBHelper.GetCollection<Customer>("Customers");
                var customers = collection.Find(_ => true).ToList();

                // Bind customers to the DataGrid
                CustomersDataGrid.ItemsSource = customers;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading customers: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Validate inputs
                if (string.IsNullOrWhiteSpace(NameTextBox.Text) ||
                    string.IsNullOrWhiteSpace(EmailTextBox.Text) ||
                    string.IsNullOrWhiteSpace(PhoneTextBox.Text) ||
                    string.IsNullOrWhiteSpace(AddressTextBox.Text))
                {
                    MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Create customer object
                var customer = new Customer
                {
                    Name = NameTextBox.Text,
                    Email = EmailTextBox.Text,
                    Phone = PhoneTextBox.Text,
                    Address = AddressTextBox.Text
                };

                // Save to MongoDB
                var collection = App.MongoDBHelper.GetCollection<Customer>("Customers");
                collection.InsertOne(customer);

                MessageBox.Show("Customer saved successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Clear fields and reload customers
                NameTextBox.Clear();
                EmailTextBox.Clear();
                PhoneTextBox.Clear();
                AddressTextBox.Clear();
                LoadCustomers();
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error saving customer: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}