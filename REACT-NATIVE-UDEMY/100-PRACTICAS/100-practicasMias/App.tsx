import React from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeWrapper} from 'react-native-gesture-handler';
import {VideosPlayerScreen} from './src/components/VideosPlayerScreen';
import {VideosListScreen} from './src/components/VideosListScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Video List" component={VideosListScreen} />
        <Stack.Screen name="Video Player" component={VideosPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
