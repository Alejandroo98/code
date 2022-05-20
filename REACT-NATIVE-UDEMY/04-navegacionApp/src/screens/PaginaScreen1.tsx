import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {} //Esto como recordaras nos ayudaba a obtener las funciones como navigator, la reemplazamos con la de abajo por que nos da las opciones para scroll del menu

interface Props extends DrawerScreenProps<any, any> {}

export const PaginaScreen1 = ({navigation}: Props) => {
  //Esto lo que haces es crear un boton, y le agregamos la funcion de poder desplegar la barra lateral de opciones
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menú" onPress={() => navigation.toggleDrawer()} /> //toggleDrawer() esto viene gracias a -> interface Props extends DrawerScreenProps<any, any> {}
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina Screen 1</Text>
      <Button
        title="Ir a la pagina 2"
        onPress={() => navigation.navigate('PaginaScreen2')}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'purple',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'orange',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
