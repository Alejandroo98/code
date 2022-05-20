import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

interface chanel {
  title: string;
  url: string;
}

export const Chanel = ({title, url}: chanel) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameChanel}>{title}</Text>
      <Text style={styles.titleChanel}>Ver</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 10,
    width: 200,
  },

  titleName: {
    backgroundColor: 'black',
  },

  titleChanel: {
    textAlign: 'center',
    fontSize: 12,
    backgroundColor: 'red',
    width: 300,
    borderRadius: 10,
  },

  nameChanel: {
    color: 'white',
    fontWeight: 'bold',
  },
});
