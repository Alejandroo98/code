import PushNotification from 'react-native-push-notification';

/* Esta es la que usaremos para enviar notificaciones para la app */
const verNotificacion = (title, message) => {
  PushNotification.localNotification({
    channelId: 'Not1',
    title: title,
    message: message,
    allowWhileIdle: true,
    largeIconUrl: 'https://www.facebook.com/images/fb_icon_325x325.png',
    // smallIcon: 'https://www.facebook.com/images/fb_icon_325x325.png',
  });
};

const handleTiempoNotificacion = (title, message) => {
  PushNotification.localNotificationSchedule({
    channelId: 'Not1',
    title,
    message,
    date: new Date(Date.now() + 5 * 1000),
    allowWhileIdle: true,
  });
};

const hanldeCancelarNotificacion = () => {
  PushNotification.cancelAllLocalNotifications();
};

// const birthday = new Date();
//Año - numero del mes ( el numero del index del mes es decir le restar uno ) - el numero del dia - horas - minutos - segundos

export {
  verNotificacion,
  handleTiempoNotificacion,
  hanldeCancelarNotificacion,
};
