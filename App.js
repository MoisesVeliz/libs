import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mi lista de libros' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={({route}) => ({title: route.params.name})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}