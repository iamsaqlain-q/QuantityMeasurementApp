import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LengthScreen from './LengthScreen';
import TemperatureScreen from './TemperatureScreen';


const Tab = createMaterialTopTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

export default function TopNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 13, fontweight: 'bold', color: '#fff' },
        tabBarStyle: { width: 355, backgroundColor: '#7600bc' },
      })
      }
    >
      <Tab.Screen
        name="Length"
        component={LengthScreen}
      />
      <Tab.Screen
        name="Temperature"
        component={TemperatureScreen}
      />
    </Tab.Navigator>

  )
}
const styles = StyleSheet.create({
  navcontainer: {
    height: 200,
    backgroundColor: '#fff',
  },
})

