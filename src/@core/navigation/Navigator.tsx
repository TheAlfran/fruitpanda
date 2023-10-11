import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Addtocartpage from '../page/Cart/addtocartpage';
import Profilepage from '../page/Profile/profilepage';
import { Ionicons } from '@expo/vector-icons';
import MainPage from '../page/Main/MainPage';

const Tab = createBottomTabNavigator();

export default function Navigator1() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color="#FF726B" />
          ),
          tabBarActiveTintColor: "#FF726B",
          tabBarInactiveTintColor: 'gray',
        }}
      />

      <Tab.Screen
        name="Add To Cart"
        component={Addtocartpage}
        options={({ navigation }) => ({
          tabBarLabel: 'Add to Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={24} color="#FF726B" />
          ),
          tabBarActiveTintColor: "#FF726B",
          tabBarInactiveTintColor: 'gray',
          headerTitle: 'Add To Cart', // Set the header title here
          headerTitleAlign: 'center', // Center align the header title
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="#FF726B"
              margin={10}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />


      <Tab.Screen
        name="Profile"
        component={Profilepage}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color="#FF726B" />
          ),
          tabBarActiveTintColor: "#FF726B",
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>

  );
}
