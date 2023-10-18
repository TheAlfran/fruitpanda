import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNav from './src/@core/navigation/MainNav';
import { ProductProvider } from './src/@core/Screens/Cart/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
const Stack = createStackNavigator();



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <MainNav/>
      </ProductProvider>
   </QueryClientProvider>
  );
}
