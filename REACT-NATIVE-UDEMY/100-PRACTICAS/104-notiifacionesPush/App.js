import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {notificationManager as notificationManager} from './src/NotificationManager';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.localNotify = null;
  }

  componentDidMount() {
    this.localNotify = notificationManager;

    this.localNotify.configure(
      this.onRegister,
      this.onNotification,
      this.onOpenNotification,
    );
  }

  onRegister(token) {
    console.log('[Notification] Registered: ', token);
  }

  onNotification(notify) {
    console.log('[Notification] onNotification: ', notify);
  }

  onOpenNotification(notify) {
    console.log('[Notification]  onOpenNotification: ', notify);
    alert.show('Open Notification');
  }

  onPressSendNotification = () => {
    this.localNotify.showNotification(
      1,
      'App notification',
      'Local notification',
      {},
      {},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressSendNotification}>
          <Text>Send notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Cancel notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
