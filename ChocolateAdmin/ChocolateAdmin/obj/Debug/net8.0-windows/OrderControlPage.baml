   M S B A M L   `   `   `  ����  ChocolateAdmin%    ChocolateAdmin.OrderControlPage   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5        N� Title$  Order Control��5      .��5      � $��20q�6    � RowDefinitions 5   
   �� 5      $��70 �6   �� 5	      .+�5   
   �� $��0��6      whiteBorder#��[  6   $��0,0,0,10q�6C   ._�5      �  � ColumnDefinitions 5      �� 5      �� 5      $	��200 �6'   .+�5      �� $��Order Controlling��6   $��Center=�5       �� Padding$ 10q�5      $��18(�5      $��
Montserrat)�5      
�������$
��Bold"�5      �� 5      $��1��6   .+�5      �  5      �� 5       $��60 �6/   �� 5!      .+�5#      ��  �� Padding$ 10q�6!   $��0��6.   ._�5$      �� $��/Images/man.png��6$   $
��Fill=�6=   5%      �� 5&      $��1��6%   $��Center=�65   .+�5'      �� $��Rahal Sathsara��6(   $
��Bold"�6>   $��14(�6P   �� 5(      $	��CEO��6(   $��SemiBold"�63   
�������$��11(�6[   5)      5+      5,      5.      5/      � 51   
   $��1��6   $��0,10,0,0q�6    52      �� 53      $
��Auto �6    �� 54      $
��Auto �6    �� 55      $��* �6    .+�59      �� $��0��6    �� Orientation$ 
Horizontal=�6&   $��0,0,0,10q�6?   .+�5:      �� -   5         ��Name$ SearchTextBox��5:      $	��200��61   $��0,0,10,0q�6=   �� 5;      -   5         ��Name$ StatusFilterComboBox��5;      $	��150��69   $��0,0,10,0q�6E    �� SelectedIndex$ 0��6W   .@�5<      �� $��All Statuses��6#   �� 5=      $��Pending��6#   �� 5>      $��Shipped��6#   �� 5?      $��	Delivered��6#   5@      �� 5A      -   5        $��Filter��5A      $��20 10q�6E   $��0q�6U   $
��Bold"�6i   
���������5B      �� 5C      .��5D      � 	 � Color$	 #C19A6B��6+   
 � Offset$
 1Q�6;   � 5E      $	 #9C784C��6+   $	
 0.5Q�6;   � 5F      $	 #6B4423��6+   $
 0Q�6;   5G      5I      5J      &   System.Windows.Controls.DataGrid  5M      -   5          Name$ OrdersDataGrid��5M      $��2��6/      AutoGenerateColumns$ False��6<      
IsReadOnly$
 True��6X      Columns 5N      0  *System.Windows.Controls.DataGridTextColumn  5O      ,  &System.Windows.Controls.DataGridColumn   Header$ Customer Name��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$	 150 6a   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6@   �� *CustomerName+6a     5P      $ Products��6)   $ * 6_    6;   �� *ProductsDisplay+6_     5Q      $ Address��6)   $	 200 6V    6:   �� *	Address+6V     5R      $ Total Price��6)   $	 100 6m    6>   �� *
TotalPrice+ �� StringFormat$ C��6m   4  .System.Windows.Controls.DataGridTemplateColumn  5S      $ Status��6-   $	 150 6=      CellTemplate 5T      �� 5U      .R�5V   "   �� -   5         �� SelectedItem 5V   +   �� *Status+.@�5W   &   �� $��Pending��63   �� 5X   &   $��Shipped��63   �� 5Y   &   $��	Delivered��63   5Z   #   5[      5]        5^      $ Actions��6-   $	 100 6>    5_      �� 5`      .R�5a   "   �� -   5        $��Delete��5a   )     deleteButtonStyle#��[ 6U   5b      5d      5f      5g      5i      5l      