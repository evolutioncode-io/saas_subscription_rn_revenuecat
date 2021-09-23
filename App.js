import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import Reducers from './src/store/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(logger))}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
