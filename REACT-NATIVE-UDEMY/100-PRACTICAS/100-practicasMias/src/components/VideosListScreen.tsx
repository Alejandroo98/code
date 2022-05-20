// import Orientation from 'react-native-orientation';
// https://www.w3schools.com/html/mov_bbb.mp4
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
// import {Container} from 'native-base';

interface Props extends StackScreenProps<any, any> {}
export const VideosListScreen = ({navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1}}>
        <Text
          onPress={() =>
            navigation.navigate('Video List', {
              external: true,
              videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            })
          }>
          Item 1
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          onPress={() =>
            navigation.navigate('Video Player', {
              external: true,
              videoUrl: '../assets/video.mp4',
            })
          }>
          Item 2
        </Text>
      </View>
    </View>
  );
};
