   M S B A M L   `   `   `  ����  ChocolateAdmin%    ChocolateAdmin.ViewProductsPage   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5        N� Title$  View Products��5      .��5      � $��20q�6    � RowDefinitions 5   
   �� 5      $��70 �6   �� 5	      $��* �6   .+�5   
   �� $��0��6      whiteBorder#��[  6   $��0,0,0,10q�6C   ._�5      �  � ColumnDefinitions 5      �� 5      �� 5      $	��200 �6'   .+�5      �� $��View Products��6   $��Center=�5       �� Padding$ 10q�5      $��18(�5      $��
Montserrat)�5      
�������$
��Bold"�5      �� 5      $��1��6   .+�5      �  5      �� 5      $��60 �6/   �� 5       .+�5"      ��  �� Padding$ 10q�6!   $��0��6.   ._�5#      �� $��/Images/man.png��6$   $
��Fill=�6=   5$      �� 5%      $��1��6%   $��Center=�65   .+�5&      �� $��Rahal Sathsara��6(   $
��Bold"�6>   $��14(�6P   �� 5'      $	��CEO��6(   $��SemiBold"�63   
�������$��11(�6[   5(      5*      5+      5-      5.      � 50   
   $��1��6   .+�51      �� #��[  6   $��0q�6:   $ 10q�6E   ._�52      &   System.Windows.Controls.DataGrid  -   5          Name$ ProductsDataGrid��52      
�������   AutoGenerateColumns$ False��6H      
IsReadOnly$
 True��6d      Columns 53      4  .System.Windows.Controls.DataGridTemplateColumn  54      ,  &System.Windows.Controls.DataGridColumn	   Header$	 Image��62   
   Width5  /System.Windows.Controls.DataGridLengthConverter$	
 100 6A      CellTemplate 55      �� 56   "   .R�57   &   �� $��50��6E   $��50��6P   $��Uniform=�6\   ��6,   �� *Image+6\   58   #   5:      0  *System.Windows.Controls.DataGridTextColumn  5<      $
	 Name��6-   $	
 150 6T   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6;   �� *Name+6T     5=      $	 Description��6-   $
 * 6b    6B   �� *Description+6b     5>      $	 Price��6-   $	
 100 6f    6<   �� *Price+ �� StringFormat$ C��6f     5?      $	 Category��6-   $	
 150 6\    6?   �� *
Category+6\   5A      5C      5D      5G      5I      