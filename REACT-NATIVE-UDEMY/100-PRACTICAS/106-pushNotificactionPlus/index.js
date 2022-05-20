/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification, { Importance } from 'react-native-push-notification';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
  /* Para que no me salga mas el error que tine que ver con firebase lo quee hice fue importrar de react-native Platform y loa grege aqui en la linea de arriba   */
});

PushNotification.createChannel({
  channelId: 'Not1', // (required)
  channelName: 'Nombre', // (required)
});

AppRegistry.registerComponent(appName, () => App);
