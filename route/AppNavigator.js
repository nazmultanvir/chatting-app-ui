import React from 'react';
import {Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatDashboard from '../src/view/ChatDashbord/ChatDashboard';
import ChattingDetails from '../src/view/ChattingDetails/ChattingDetails';

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ChatDashboard">
        {/* <Stack.Screen name="InitialLoader" component={InitialLoader} /> */}
        <Stack.Screen
          name="ChatDashboard"
          component={ChatDashboard}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="ChattingDetails"
          component={ChattingDetails}
          options={{cardStyleInterpolator: forSlide}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
