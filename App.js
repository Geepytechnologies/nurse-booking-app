import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfilelistScreen from './screens/ProfilelistScreen';
import ProfileScreen from './screens/ProfileScreen';
import Appointment from './screens/Appointment';
import Payment from './screens/Payment';
import Verification from './screens/Verification';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Verification' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Profilelist" component={ProfilelistScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Appointment" component={Appointment}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Verification" component={Verification}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  }
});
