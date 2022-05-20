import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PaginaScreen3 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalMargin}>PaginaCreen3</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
