import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BarcodeScanner from './Screens/BarcodeScanner';
import Info from './Screens/Info';

const Root = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Group screenOptions={{headerShown: false}}>
          <Root.Screen name="BarcodeScanner" component={BarcodeScanner} />
        </Root.Group>
        <Root.Group>
          <Root.Screen name="Info" component={Info} />
        </Root.Group>
      </Root.Navigator>
    </NavigationContainer>
  );
}
