import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.boxes, styles.topLeft]} />
      <View style={[styles.boxes, styles.topRigth]} />
      <View style={[styles.boxes, styles.bottonLeft]} />
      <View style={[styles.boxes, styles.bottonRigth]} />
      {/* En este usamos un shorcut, echale un ojo */}
      {/* <View style={[styles.fullScreen]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    flex: 1,
    // width: '100%',
    // height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxes: {
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    position: 'absolute',
    width: 100,
  },

  topLeft: {
    backgroundColor: '#5856D6',
    left: 0,
    top: 0,
  },

  topRigth: {
    backgroundColor: '#F0A23B',
    right: 0,
    top: 0,
  },

  bottonRigth: {
    bottom: 0,
    right: 0,
    backgroundColor: '#5856D6',
  },

  bottonLeft: {
    bottom: 0,
    left: 0,
    backgroundColor: '#F0A23B',
  },

  fullScreen: {
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: 'red',
    ...StyleSheet.absoluteFillObject,
    //La linea de arriba es un shorcut para hacer esto de top 0 left 0 rigth 0 bottom 0, para que ocupe toda la pantalla
    opacity: 0.2,
  },
});
