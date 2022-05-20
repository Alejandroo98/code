import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TareaScrean} from './src/screens/Tarea/TareaScrean9';

// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {DimensionesScreen} from './src/components/DimensionesScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <TareaScrean />
    </SafeAreaView>
  );
};

export default App;
