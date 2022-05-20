import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions(); // un hook de ract para saber el tamaño de el dispositivo

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Text>Dimensiones screen</Text> */}
      <View
        style={{
          ...styles.cajaNaranja,
          height: height * 0.5, //Lo que hacemos aqui es que gracias al hook obtenemos la menencion del movil y luego depenendiendo de eso lo asignamos aqui,
        }}></View>
      <View style={styles.cajaMorada}></View>
      <Text style={styles.title}>
        W: {width}, --- H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },

  cajaNaranja: {
    backgroundColor: '#F0A23B',
    height: '50%',
    width: '50%',
  },

  title: {
    fontSize: 30,
  },
});
