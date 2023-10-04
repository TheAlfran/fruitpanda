import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNav from './src/@core/navigation/MainNav';


const Stack = createStackNavigator();

export default function App() {
  return (
    
   <MainNav/>
  );
}
