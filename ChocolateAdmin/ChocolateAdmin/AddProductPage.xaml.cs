using System;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChocolateAdmin
{
    public partial class AddProductPage : Page
    {
        private string _imagePath = string.Empty;

        public AddProductPage()
        {
            InitializeComponent();
        }

        // Browse Image Button Click Event
        private void BrowseImageButton_Click(object sender, RoutedEventArgs e)
        {
            var dialog = new Microsoft.Win32.OpenFileDialog
            {
                Filter = "Image Files (*.jpg; *.png)|*.jpg;*.png"
            };

            if (dialog.ShowDialog() == true)
            {
                _imagePath = dialog.FileName;

                // Load and display the selected image
                var bitmap = new BitmapImage(new Uri(_imagePath));
                ProductImagePreview.Source = bitmap;

                MessageBox.Show("Image selected: " + _imagePath);
            }
        }

        // Save Button Click Event
        private async void SaveButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Validate inputs
                if (string.IsNullOrWhiteSpace(ProductNameTextBox.Text) ||
                    string.IsNullOrWhiteSpace(DescriptionTextBox.Text) ||
                    string.IsNullOrWhiteSpace(PriceTextBox.Text) ||
                    CategoryComboBox.SelectedItem == null)
                {
                    MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Parse price
                if (!decimal.TryParse(PriceTextBox.Text, out decimal price))
                {
                    MessageBox.Show("Invalid price format.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                // Read image as byte array
                byte[] imageBytes = null;
                if (!string.IsNullOrEmpty(_imagePath))
                {
                    imageBytes = File.ReadAllBytes(_imagePath);
                }

                // Create product object
                var product = new BsonDocument
                {
                    { "Name", ProductNameTextBox.Text },
                    { "Description", DescriptionTextBox.Text },
                    { "Price", price },
                    { "Category", (CategoryComboBox.SelectedItem as ComboBoxItem)?.Content.ToString() },
                    { "Image", imageBytes }
                };

                // Save to MongoDB asynchronously
                var collection = App.MongoDBHelper.GetCollection<BsonDocument>("Products");
                await collection.InsertOneAsync(product);

                MessageBox.Show("Product saved successfully!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Clear fields
                ProductNameTextBox.Clear();
                DescriptionTextBox.Clear();
                PriceTextBox.Clear();
                CategoryComboBox.SelectedIndex = -1;
                _imagePath = string.Empty;
                ProductImagePreview.Source = null; // Clear the image preview
            }
            catch (TimeoutException)
            {
                MessageBox.Show("The operation timed out. Please check your internet connection and try again.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            catch (MongoException ex)
            {
                MessageBox.Show($"Error saving product: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An unexpected error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}