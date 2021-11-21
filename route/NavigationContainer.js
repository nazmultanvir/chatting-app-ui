import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
export default function NavigationContainer() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
