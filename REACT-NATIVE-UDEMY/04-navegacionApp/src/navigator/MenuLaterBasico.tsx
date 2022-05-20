import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLaterBasico = () => {
  const {width} = useWindowDimensions(); //Recuerda que esto nos sirve para extraer las dimenciones del telefono

  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      {/* Gracias permanent esque podemos dejar el menu lateral abierto */}
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingSecreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
