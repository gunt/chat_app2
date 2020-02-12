import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import the screens
import Screen1 from './components/Start';
import Screen2 from './components/Chat';
// import react Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// Create the navigator
const navigator = createStackNavigator({
  Start: { screen: Start },
  Chat: { screen: Chat }
});

const navigatorContainer = createAppContainer(navigator);
// Export it as the root component
export default navigatorContainer;
