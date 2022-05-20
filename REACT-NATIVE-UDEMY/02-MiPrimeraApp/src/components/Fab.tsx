import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl'; // el ? despues del campo queire decir que es opcional
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'bl'}: Props) => {
  const ios = () => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.alignButton,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      {/*El  TouchableNativeFeedback.Ripple('white', true, 45) es para darle un estilo cuando tocas el boton */}
      <View style={styles.sumarView}>
        <Text style={styles.sumarText}> {title} </Text>
      </View>
    </TouchableOpacity>
  );

  const android = () => (
    <View
      style={[
        styles.alignButton,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('white', true, 45)}>
        <View style={styles.sumarView}>
          <Text style={styles.sumarText}> {title} </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  alignButton: {
    position: 'absolute',
    bottom: 0,
    margin: 15,
  },

  left: {
    left: 0,
  },

  right: {
    right: 0,
  },

  sumarView: {
    backgroundColor: 'black',
    width: 100,
    borderRadius: 100,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  sumarText: {
    color: 'white',
    textAlign: 'center',
  },
});
