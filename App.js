import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatProyect from './screens/AddChatProyect';
import AddBomProyect from './screens/AddBomProyect';
import ViewProyectScreen from './screens/ViewProyectScreen';
const Stack = createStackNavigator();
const globalScreensOptions = {
  headerStyle: { backgroundColor: '#2c6bed', },
  headerTitleStyle: { color: 'white', textAlign: 'center' },
  headerTintColor: 'white',
}
export default function App() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreensOptions}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='HOME' component={HomeScreen} />
      <Stack.Screen name='NEW' component={AddChatProyect} />
      <Stack.Screen name='Bom' component={AddBomProyect} />
      <Stack.Screen name='View' component={ViewProyectScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
