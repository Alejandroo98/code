import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {Image} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

// const Stack = createDrawerNavigator();
// const SettingStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingSecreen" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// };

export const MenuLater = () => {
  const {width} = useWindowDimensions(); //Recuerda que esto nos sirve para extraer las dimenciones del telefono

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingSecreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/*  Parte del avatar  */}
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuBoton}>
          <Text style={styles.menuTexto}>Nagegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingSecreen')}
          style={styles.menuBoton}>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
