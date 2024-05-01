import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabStackParamList} from '../../types.ts';
import PostSvg from '../assets/svg/PostSVG.tsx';
import SpeakerSvg from '../assets/svg/SpeakerSvg.tsx';
import AudioScreen from '../screens/AudioScreen';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigation = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {backgroundColor: '#F24C3D'},
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: () => <SpeakerSvg color={'#EBF400'} />,
        tabBarItemStyle: {alignSelf: 'center'},
      }}
      name="AudioTab"
      component={AudioScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <PostSvg />,
        tabBarItemStyle: {alignSelf: 'center'},
      }}
      name="PostTab"
      component={PostScreen}
    />
  </Tab.Navigator>
);

export default TabNavigation;
