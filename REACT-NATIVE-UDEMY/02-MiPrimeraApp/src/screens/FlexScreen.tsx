import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  caja1: {
    // flex: 2,
    width: 100,
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 20,
  },

  caja2: {
    // flex: 2,
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 20,
    backgroundColor: 'red',
  },

  caja3: {
    // flex: 2,
    borderWidth: 3,
    borderColor: 'white',
    fontSize: 20,
    backgroundColor: 'blue',
  },
});
