import React, {useState} from 'react';
import {NavigatorIOS, SafeAreaView, StatusBar, View} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      {/* Esto lo que hara es ocultar la barra de menu del celu, puede ponerte un color tambien */}
      <StatusBar backgroundColor="red" hidden={true} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
