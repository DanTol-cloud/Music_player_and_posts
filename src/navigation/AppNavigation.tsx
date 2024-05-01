import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation.tsx';
import {AppStackParamList} from '../../types.ts';
import PostDetailsScreen from '../screens/PostDetailsScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = (): JSX.Element => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Audio" component={TabNavigation} />
    <Stack.Screen name="Post" component={TabNavigation} />
    <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
