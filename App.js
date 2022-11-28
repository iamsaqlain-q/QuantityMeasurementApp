import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './src/components/StartPage';
import MeasurementPage from './src/components/MeasurementPage';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name="Quantity Measurement App"
          options={{
            headerStyle: {
              backgroundColor: '#7600bc',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
              marginLeft: 40
            }
          }}
          component={StartPage}
        />
        <Stack.Screen
          name="Measurements"
          component={MeasurementPage}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;