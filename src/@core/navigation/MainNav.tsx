import React, { useEffect } from "react";
import { NavigationContainer, NavigationContainerRef, ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import LoginPage from "../Screens/Login/LoginPage";
import Navigator1 from "./Navigator";
import PaymentPage from "../Screens/Payment/paymentpage";
import PayPage from "../Screens/Payment/paypage";
import MapLocation from "../Screens/Profile/mapLocation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();




const MainNav: React.FC = () => {

  const navigationRef = React.useRef<NavigationContainerRef<ParamListBase>>(null);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const authToken = await AsyncStorage.getItem("authToken");
      const userId = await AsyncStorage.getItem("userId");

      if (authToken && userId) {
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Navigate', params: {userId: Number(userId)} }],
        });
      }
    };

    checkUserLoggedIn();
  }, []);


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Navigate"
          component={Navigator1}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Checkout"
          component={PaymentPage}
          options={{
            title: "Checkout Page", 
            headerStyle: { backgroundColor: "#D70F64" }, 
            headerTintColor: "#fff", 
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PayPage}
          options={{
            title: "Payment", 
            headerStyle: { backgroundColor: "#D70F64" },
            headerTintColor: "#fff", 
            headerTitleStyle: { fontWeight: "bold" },
          }}
        ></Stack.Screen>
         <Stack.Screen
          name="Location"
          component={MapLocation}
          options={{headerShown: false}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;