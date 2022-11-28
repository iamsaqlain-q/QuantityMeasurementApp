import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LengthScreen from './LengthScreen';
import WeightScreen from './WeightScreen';

const Tab = createMaterialTopTabNavigator();
const MeasurementPage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 15, fontweight: 'bold', color: '#fff' },
        tabBarStyle: { width: '100%', backgroundColor: '#7600bc' },
        tabBarIndicatorStyle: {backgroundColor: '#fff'}
      })
      }
    >
      <Tab.Screen
        name="Length"
        component={LengthScreen}
      />
      <Tab.Screen
        name="Weight"
        component={WeightScreen}
      />
    </Tab.Navigator>

  )
}

export default MeasurementPage