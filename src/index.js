import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/reacototronConfig';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
import { store, persistor } from './store';

import App from '~/App';

class Index extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('e5e1629f-b034-4d7b-a1ef-3c56de50d3e3');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  UNSAFE_componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  onReceived = data => {

  }

  onOpened = (notification) => {

  }

  onIds = (id) => {

  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
