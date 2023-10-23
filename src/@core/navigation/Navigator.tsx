import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Addtocartpage from "../Screens/Cart/addtocartpage";
import Profilepage from "../Screens/Profile/profilepage";
import { Ionicons } from "@expo/vector-icons";
import MainPage from "../Screens/Main/MainPage";

const Tab = createBottomTabNavigator();

export default function Navigator1() {
  return (
    <Tab.Navigator initialRouteName="Home1">
      <Tab.Screen
        name="Home2"
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
        name="AddCart1"
        component={Addtocartpage}
        options={({ navigation }) => ({
          tabBarLabel: "My Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={24} color="#D70F64" />
          ),
          tabBarActiveTintColor: "#D70F64",
          tabBarInactiveTintColor: "gray",
          headerTitle: "My Cart", 
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#D70F64" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
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
