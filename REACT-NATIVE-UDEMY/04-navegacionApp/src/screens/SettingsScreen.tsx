import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets(); //Este hooks nos permite mostrar el contenido de nuestra tarjea por debajo del nouche de nuestros celulares, antes ya lo hicimos con SafeAreaView pero tambien tenemos un hooks que nos ayuda a hacer lo mismo, am y claro esto sirve para los iphone para los android no por que estos no tienen nouche

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Setting screen</Text>
    </View>
  );
};
