import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';

class NotificationManager {
  configure = (onRegister, onNotification, onOpenNotification) => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        onRegister(toke);
        console.log('[NotificationManager] onRegister TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('[NotificationManager] onNotification:', notification);

        if (Platform.OS === 'android') {
          notification.userInteraction = true;
        }

        if (notification.userInteraction) {
          onOpenNotification(notification);
        } else {
          this.onNotification(notification);
        }

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });

    _buildAndroidNotification = (
      id,
      title,
      message,
      data = {},
      options = {},
    ) => {
      return {
        id,
        autoCancel: true,
        largeIcon: options.largeIcon || 'ic_launcher',
        smallIcon: options.smallIcon || 'ic_launcher',
        bigText: message || '',
        subText: title || '',
        vibrate: options.vibrate || false,
        vibration: options.vibration || 300,
        priority: options.priority || 'high',
        imprtance: options.imprtance || 'high',
        data: data,
      };
    };
  };

  _buildIosNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id,
        item: data,
      },
    };
  };

  showNotification = () => {
    PushNotification.localNotification({
      /* Porpiedades de android */
      ...this._buildAndroidNotification(id, title, message, data, options),

      /* Propiedades para IOS */
      ...this._buildIosNotification(id, title, message, data, options),

      /* IOS y android propiedades */
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'dafault',
      userInteraction: false,
    });
  };

  cancellAllLocalNotificaction = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  unRegister = () => {
    PushNotification.unregister();
  };
}

export const notificationManager = new NotificationManager();
