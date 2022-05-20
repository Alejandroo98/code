import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

// interface RouteParams { //Esta es una menar de poder decirle a typescript el tipo de elemetnos que esperamos con su tipo, ahora veremos otra
//   id: number;
//   nombre: string;
// }

/*  La mejor manera de hacer lo de arriba es definiir estos argumentos pero desde el archivo StackNavigator, es decir lo hacemos globales */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {} //Este RootStackParams es lo que hicimos en el otro archivo, no solo deves ponerlo en el stack del otro archivo si no tambien debes de importarlo aqui
//El segundo argumento de la liena de arriba es el nombre de la ruta o tarjeta en la que nos encontramos

export const PersonaScreen = ({route, navigation}: Props) => {
  //En route obtenemos la informacion que enviamos desde la otra tarjeta o desde la otra vista
  //   const params = route.params as RouteParams; //Esta va con la interfas crearda arriba, por eso el -> as

  const params = route.params; //La forma larga que fue la que hicimos es la correcta, ahora si pones el cursor encima de paramos podras ver el tupo de argumentos

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre, // El -> ! sive para que tipyscirpt te deje pasar, de lo coontrario te marcara un error, para que no suceda eso tenemos que crear una interface, como lo hicimos con el hicimos con el ejemplo y ahora si podemos elimianr el signo ( ! )
      //   title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
