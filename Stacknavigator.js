import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import PickUpScreen from './screens/PickupScreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileSreen';
import OrderScreen from './screens/OrderScreen';

// import PickUpScreen from './screens/PickUpScreen';
// import CartScreen from './screens/CartScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import OrderScreen from './screens/OrderScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}}/>
        <Stack.Screen name="PickUp" component={PickUpScreen} options={{headerShown:false}}/>
         <Stack.Screen name="Cart" component={Cartscreen} options={{headerShown:false}}/>
         <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
         <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
         <Stack.Screen name="Order" component={OrderScreen} options={{headerShown:false}}/>    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})