import React from 'react';
import {Text, View} from 'react-native';
import VideoPlayer from './src/components/VideoScreen';
const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <VideoPlayer />
    </View>
  );
};

export default App;
