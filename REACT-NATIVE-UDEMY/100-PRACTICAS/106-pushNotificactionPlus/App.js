import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import partidos from './src/data/horaPartidos';
import { verNotificacion } from './src/notifiaction.android';
import { getDate } from './src/helpers/getHour';
import { InstagramScreen } from './src/screens/InstagramScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

//En el caso de la app tienes que agregar un boton y lo que ara es enviar las notificaciones en caso el tiempo del partido esta 15 minutos de empezar.

const App = () => {
  const [statePop, setStatePop] = useState(true);

  /* ENVIAR NOFITIFACIONES */
  const enviarNotificaciones = () => {
    partidos.map(partido => {
      if (partido.hora.split(' ')[0] == getDate()) {
        verNotificacion(
          partido.title,
          `${partido.messgage} Hora del partido ${
            partido.hora.split(' ')[1]
          }, no te lo pierdas!!!`,
        );
      }
    });
  };

  // useEffect(async () => {
  //   const data = await AsyncStorage.getItem('@instagramPop');

  //   if (data != 'true') {
  //     setStatePop(false);
  //   } else {
  //     setStatePop(true);
  //   }

  //   await AsyncStorage.removeItem('@instagramPop');
  // }, [statePop]);

  if (statePop) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: 'blue' }}
          onPress={() => enviarNotificaciones()}>
          <Text style={styles.btnText}>Enviar notificaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.btn}
          onPress={() => verNotificacion('Title', 'Message')}>
          <Text style={styles.btnText}>
            Click para notificacion al instante
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <InstagramScreen statePop={setStatePop} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 510,
    marginTop: 10,
  },

  btnText: {
    color: 'white',
  },
});

export default App;
