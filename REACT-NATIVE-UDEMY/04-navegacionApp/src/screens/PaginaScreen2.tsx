import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const PaginaScreen2 = () => {
  const navigator = useNavigation(); //Como ves tambien podemos acceder al navigator por medio de un hoolk, antes como recuerdas lo teniamos por medio de una prop

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Regresar',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalMargin}>PaginaCreen2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate('PaginaScreen3')}
      />
    </View>
  );
};
