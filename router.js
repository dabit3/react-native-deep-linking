import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './home';
import People from './people';

const Router = StackNavigator({
  Home: { screen: Home },
  People: { screen: People },
});

export default Router;
