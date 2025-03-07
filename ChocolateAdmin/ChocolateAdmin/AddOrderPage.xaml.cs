using MongoDB.Driver;
using System.Windows.Controls;
using System.Windows;

namespace ChocolateAdmin
{
    public partial class AddOrderPage : Page
    {
        private List<Customer> _customers = new();
        private List<Product> _products = new();

        public AddOrderPage()
        {
            InitializeComponent();
            LoadCustomers();
            LoadProducts();
        }

        private void LoadCustomers()
        {
            try
            {
                var collection = App.MongoDBHelper.GetCollection<Customer>("Customers");
                _customers = collection.Find(_ => true).ToList();
                CustomerNameComboBox.ItemsSource = _customers;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading customers: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void LoadProducts()
        {
            try
            {
                var collection = App.MongoDBHelper.GetCollection<Product>("Products");
                _products = collection.Find(_ => true).ToList();
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error loading products: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void CustomerNameComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (CustomerNameComboBox.SelectedItem is Customer selectedCustomer)
            {
                AddressTextBox.Text = selectedCustomer.Address;
            }
        }

        private void AddProductButton_Click(object sender, RoutedEventArgs e)
        {
            var productInputRow = new StackPanel { Orientation = Orientation.Horizontal, Margin = new Thickness(0, 5, 0, 5) };

            var productNameComboBox = new ComboBox
            {
                DisplayMemberPath = "Name",
                ItemsSource = _products,
                Width = 200,
                Margin = new Thickness(0, 0, 10, 0)
            };

            var quantityTextBox = new TextBox
            {
                Width = 50,
                Margin = new Thickness(0, 0, 10, 0)
            };

            productInputRow.Children.Add(productNameComboBox);
            productInputRow.Children.Add(quantityTextBox);
            ProductsStackPanel.Children.Add(productInputRow);
        }

        private void CalculateTotalButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                decimal totalPrice = 0;

                foreach (var child in ProductsStackPanel.Children)
                {
                    if (child is StackPanel productInputRow)
                    {
                        var productNameComboBox = productInputRow.Children[0] as ComboBox;
                        var quantityTextBox = productInputRow.Children[1] as TextBox;

                        if (productNameComboBox?.SelectedItem is Product selectedProduct &&
                            int.TryParse(quantityTextBox?.Text, out int quantity))
                        {
                            totalPrice += selectedProduct.Price * quantity;
                        }
                    }
                }

                TotalPriceTextBox.Text = totalPrice.ToString("C");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error calculating total: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (CustomerNameComboBox.SelectedItem == null ||
                    string.IsNullOrWhiteSpace(AddressTextBox.Text) ||
                    string.IsNullOrWhiteSpace(TotalPriceTextBox.Text) ||
                    OrderStatusComboBox.SelectedItem == null)
                {
                    MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                var selectedCustomer = CustomerNameComboBox.SelectedItem as Customer;

                var products = new Dictionary<string, int>();
                foreach (var child in ProductsStackPanel.Children)
                {
                    if (child is StackPanel productInputRow)
                    {
                        var productNameComboBox = productInputRow.Children[0] as ComboBox;
                        var quantityTextBox = productInputRow.Children[1] as TextBox;

                        if (productNameComboBox?.SelectedItem is Product selectedProduct &&
                            int.TryParse(quantityTextBox?.Text, out int quantity))
                        {
                            products[selectedProduct.Name] = quantity;
                        }
                    }
                }

                var order = new Order
                {
                    CustomerName = selectedCustomer?.Name ?? string.Empty,
                    Products = products,
                    Address = AddressTextBox.Text,
                    TotalPrice = decimal.Parse(TotalPriceTextBox.Text.Replace("$", "").Replace(",", "")),
                    Status = (OrderStatusComboBox.SelectedItem as ComboBoxItem)?.Content.ToString() ?? "Pending"
                };

                var collection = App.MongoDBHelper.GetCollection<Order>("Orders");
                collection.InsertOne(order);

                MessageBox.Show("Order saved successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                CustomerNameComboBox.SelectedIndex = -1;
                AddressTextBox.Clear();
                ProductsStackPanel.Children.Clear();
                TotalPriceTextBox.Clear();
                OrderStatusComboBox.SelectedIndex = -1;
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error saving order: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}