import React, { Component } from 'react';
import {
  View
} from 'react-native';
import RootScreen from './src/RootScreen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
        <RootScreen />
      </View>
    );
  }
}