import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './src/components/StartPage';
import TopNav from './src/components/TopNav';
import Home from './src/components/Home';

const Stack = createStackNavigator();  
function App() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator >
        <Stack.Screen
          name="Icon"
          component={StartPage}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;