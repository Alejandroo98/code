import React from 'react';
import {
  Linking,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InstagramScreen = ({ statePop }) => {
  const hanleChangePop = async () => {
    openInstagram();

    setTimeout(async () => {
      statePop('true');
      await AsyncStorage.setItem('@instagramPop', 'true');
    }, 7000);
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/nancy_risol');
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxMessage}>
        <Text style={styles.boxMessageTxt}>
          Para poder continuar viendo sigue esta cuenta de instagram, te tomara
          5 segundos.
        </Text>
        <Text style={styles.boxMessageTxt}>Gracias por usar nuestra app.</Text>

        <TouchableOpacity
          style={styles.btnSeguir}
          activeOpacity={0.9}
          onPress={() => hanleChangePop()}>
          <Text style={styles.btnSeguirTxt}>Seguir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c606c6a6',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxMessage: {
    backgroundColor: '#242424',
    width: 350,
    padding: 15,
  },

  boxMessageTxt: {
    color: 'white',
  },

  btnSeguir: {
    backgroundColor: 'purple',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  btnSeguirTxt: {
    color: 'white',
  },
});
