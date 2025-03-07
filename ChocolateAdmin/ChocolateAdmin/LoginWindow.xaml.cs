using System.Windows;
using System.Windows.Input;

namespace ChocolateAdmin
{
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Hardcoded username and password
            string validUsername = "rahal";
            string validPassword = "12345";

            // Get user input
            string username = UsernameTextBox.Text;
            string password = PasswordBox.Password;

            // Validate credentials
            if (username == validUsername && password == validPassword)
            {
                // Open the admin window
                MainWindow adminWindow = new MainWindow();
                adminWindow.Show();

                // Close the login window
                this.Close();
            }
            else
            {
                // Show error message
                ErrorMessageText.Text = "Invalid username or password.";
            }
        }

        private void Window_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (e.LeftButton == MouseButtonState.Pressed)
            {
                DragMove();
            }
        }

        private void btnMinimize_Click(object sender, RoutedEventArgs e)
        {

        }

        private void btnMinimize_Click_1(object sender, RoutedEventArgs e)
        {
            WindowState = WindowState.Minimized;
        }

        private void btnClose_Click(object sender, RoutedEventArgs e)
        {
            Application.Current.Shutdown();
        }
    }
}