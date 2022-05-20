import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PaginaScreen3} from '../screens/PaginaScreen3';
import {PaginaScreen2} from '../screens/PaginaScreen2';
import {PaginaScreen1} from '../screens/PaginaScreen1';
import {PersonaScreen} from '../screens/PersonaScreen';

//El type es como un const o un let, pero este siempre sera estatico
export type RootStackParams = {
  //Lo que ponemos aqui son todas las rutas que tenemos, y su valor van hacer los argumentos que van hacer pasdos junto con su tipo de dato en caso tu tarjeta o vista no espers ningun argumento simplemente su valor sera undifined
  //Y bueno cuando lo ingresas abajo tambien tiene que ingresarlo en la tarjeta en donde recibes los parametros
  PaginaScreen3: undefined;
  PaginaScreen2: undefined;
  PaginaScreen1: undefined;
  PersonaScreen: {id: number; nombre: string}; //Tambn podrias crear una interfas
};

export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>(); //El RootStackParams es lo que creamos arriba y define las tarjeta que recibiran argumentos, deben de coincidir los nombres de lo contrario de marcara error
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="PaginaScreen1"
        options={{title: 'Pagina Uno'}}
        component={PaginaScreen1}
      />
      <Stack.Screen
        name="PaginaScreen2"
        options={{title: 'Pagina Dos'}}
        component={PaginaScreen2}
      />
      <Stack.Screen
        name="PaginaScreen3"
        options={{title: 'Pagina Tres'}}
        component={PaginaScreen3}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
