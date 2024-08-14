import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import AppNavigator from './router/AppNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
