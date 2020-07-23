import React,{useEffect} from 'react';
import { View, Text, BackHandler,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/Screen/Main';
import Portfolio from './src/Screen/Portfolio';



const Stack = createStackNavigator();

const App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="mainPage" component={Main} options={{headerShown:false}} />
        <Stack.Screen name="Port" component={Portfolio} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;