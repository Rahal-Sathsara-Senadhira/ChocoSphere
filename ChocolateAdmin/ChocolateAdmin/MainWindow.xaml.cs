using System.Windows;
using System.Windows.Controls;

namespace ChocolateAdmin
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            // Load the Dashboard by default
            MainFrame.Navigate(new DashboardPage());
        }

        private void NavButton_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button && button.Tag != null)
            {
                string pageName = button.Tag.ToString();

                switch (pageName)
                {
                    case "Dashboard":
                        MainFrame.Navigate(new DashboardPage());
                        break;
                    case "AddProduct":
                        MainFrame.Navigate(new AddProductPage());
                        break;
                    case "ViewProducts":
                        MainFrame.Navigate(new ViewProductsPage());
                        break;
                    case "CustomerDetails":
                        MainFrame.Navigate(new CustomerDetailsPage());
                        break;
                    case "OrderControl":
                        MainFrame.Navigate(new OrderControlPage());
                        break;
                    case "AddCustomer":
                        MainFrame.Navigate(new AddCustomerPage());
                        break;
                    case "AddOrder":
                        MainFrame.Navigate(new AddOrderPage());
                        break;
                }
            }
        }
    }
}