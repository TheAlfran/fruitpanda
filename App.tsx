import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';
import LoginPage from './login/LoginPage';
import MainNav from './navigation/MainNav';


const Stack = createStackNavigator();

export default function App() {
  return (
   <MainNav/>
  );
}
