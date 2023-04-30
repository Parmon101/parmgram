import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Home} from './src/screens/Home';

export const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

const s = StyleSheet.create({});

export default App;
