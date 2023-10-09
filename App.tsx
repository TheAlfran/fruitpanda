import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNav from './src/@core/navigation/MainNav';
import { ProductProvider } from './src/@core/page/Cart/ProductContext';



const Stack = createStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <MainNav/>
   </ProductProvider>
  );
}
