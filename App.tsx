import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import AppNavigator from './src/components/AppNavigator';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View style={styles.body}>
      <AppNavigator />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  body: {
    margin: 50
  }
})

export default App;
