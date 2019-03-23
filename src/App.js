import React, { Component } from 'react';
import { Text, View, AsyncStorage, } from 'react-native';
import firebase from 'react-native-firebase';
import {AppNavigator} from './AppNavigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer/combineReducer';
import ReduxThunk from 'redux-thunk';



export default class App extends Component {

  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
    
  }

   //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
   
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
     
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
        
      }
    }
    console.log('fcmToken: ', fcmToken);
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
   const channel = new firebase.notifications.Android.Channel('paw-travel', 'PawTravel Channel', firebase.notifications.Android.Importance.Max)
              .setDescription('My apps test channel');
    // Create the channel
    firebase.notifications().android.createChannel(channel);
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      notification
              .android.setChannelId('paw-travel')
              .android.setSmallIcon('ic_launcher');
          firebase.notifications()
              .displayNotification(notification);
    });
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {

    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    // if (notificationOpen) {
    // }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}




