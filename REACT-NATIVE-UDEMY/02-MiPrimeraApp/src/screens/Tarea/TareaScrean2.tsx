import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScrean = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.boxes, styles.box1]} />
      <View style={[styles.boxes, styles.box2]} />
      <View style={[styles.boxes, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
  },

  boxes: {
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    // width: 100,
  },

  box1: {
    backgroundColor: 'yellow',
    alignSelf: 'baseline',
    width: 100,
  },

  box2: {
    backgroundColor: 'blue',
    alignSelf: 'baseline',
    width: 100,
  },

  box3: {
    backgroundColor: 'red',
  },
});
