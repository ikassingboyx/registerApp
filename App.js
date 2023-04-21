import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Users from './components/Users';
import Details from './components/Details';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>  
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

