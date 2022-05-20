import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          top: -50,
        }}>
        Contador: {contador}
      </Text>

      <Fab title="+1" onPress={() => setContador(contador + 1)} />
      <Fab title="-1" onPress={() => setContador(contador - 1)} position="br" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
