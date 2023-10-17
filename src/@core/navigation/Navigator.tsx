import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Addtocartpage from "../page/Cart/addtocartpage";
import Profilepage from "../page/Profile/profilepage";
import { Ionicons } from "@expo/vector-icons";
import MainPage from "../page/Main/MainPage";

const Tab = createBottomTabNavigator();

export default function Navigator1() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color="#D70F64" />
          ),
          tabBarActiveTintColor: "#D70F64",
          tabBarInactiveTintColor: "gray",
        }}
      />

      <Tab.Screen
        name="Add To Cart"
        component={Addtocartpage}
        options={({ navigation }) => ({
          tabBarLabel: "Add to Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={24} color="#D70F64" />
          ),
          tabBarActiveTintColor: "#D70F64",
          tabBarInactiveTintColor: "gray",
          headerTitle: "Add To Cart", // Set the header title here
          headerTitleAlign: "center", // Center align the header title
          headerStyle: { backgroundColor: "#D70F64" }, // Set the background color of the header
          headerTintColor: "#fff", // Set the color of the header text
          headerTitleStyle: { fontWeight: "bold" }, // Set the style for the header title
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={30}
              color="#fff"
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
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color="#D70F64" />
          ),
          tabBarActiveTintColor: "#D70F64",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}
