import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';
import LoginPage from '../login/LoginPage';
import MainPage from '../mainpage/MainPage';
import profilepage from '../profile/profilepage';
import addtocartpage from '../cartpage/addtocartpage';
import Navigator1 from './Navigator';


const Stack = createStackNavigator();

const MainNav: React.FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Navigate" component={Navigator1} options={{headerShown: false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNav;