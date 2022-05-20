import React from 'react';
// https://reactnavigation.org/docs/getting-started <- Enlace de la documentacion
// Cuando hags estas instalaciones no olvides bajar y volver a subir la app nuevamente,
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLaterBasico} from './src/navigator/MenuLaterBasico';
import {MenuLater} from './src/navigator/MenuLater';
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLater />
    </NavigationContainer>
  );
};

export default App;
