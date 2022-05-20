import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Orientation from 'react-native-orientation';
import Video from 'react-native-video';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log(width, height);

export const VideoPlayer = () => {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
  }, []);

  //   componentDidMount() {
  //   }

  // render
  return (
    <View
      style={styles.fullScreen}
      //   style={styles.videoContainerAndroid}
    >
      <View style={{backgroundColor: 'green'}}>
        <Video
          hideShutterView={true}
          resizeMode="contain"
          fullScreen={true}
          style={styles.videoView}
          source={{
            uri: 'https://c5bf845bb3fb.us-west-2.playback.live-video.net/api/video/v1/us-west-2.295385604636.channel.rPESOVjiKYQA.m3u8',
            headers: {
              Authorization: 'bearer some-token-value',
              'X-Custom-Header': 'some value',
            },
          }}
        />
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoView: {
    width: height,
    height: width,
    flex: 1,
    // backgroundColor: 'black',
    // flex: 1,
  },
  videoContainerAndroid: {},
  videoContainerIOS: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
    minWidth: Dimensions.get('window').height,
    minHeight: Dimensions.get('window').width,
    width: Dimensions.get('screen').height,
    height: Dimensions.get('screen').width,

    transform: [{rotate: '90deg'}],
  },
  videoIcon: {
    width: 50,
    height: 50,
  },
  pauseImageWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  backButtonWrapper: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'flex-end',
  },
});

export default VideoPlayer;
