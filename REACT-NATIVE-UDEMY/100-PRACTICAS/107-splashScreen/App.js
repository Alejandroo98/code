import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({duration: 3000, fade: true});
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Chau mundo</Text>
    </View>
  );
};

export default App;
