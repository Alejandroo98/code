// import Video from 'react-native-video';
// import Orientation from 'react-native-orientation';
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

interface Props extends StackScreenProps<any, any> {}

interface params {
  external: boolean;
  videoUrl: string;
}

export const VideosPlayerScreen = ({navigation, route}: Props) => {
  const {external, videoUrl} = route.params as params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Video
        style={styles.container}
        // ref={videoPlayer => (videoPlayer = videoPlayer)}
        // controls={true}
        // hideShutterView={true}
        // fullscreenOrientation="all"
        fullscreen={true}
        source={require('../assets/video.mp4')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 800,
    backgroundColor: 'black',
  },
});
