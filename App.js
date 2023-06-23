import {View, Text} from 'react-native';
import React from 'react';
import AzurAuth from './src/AzurAuth/AzurAuth';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AzurAuth />
    </View>
  );
}
