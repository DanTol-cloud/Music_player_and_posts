import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PostSVG, SpeakerSVG} from '@svg';
import {TabStackParamList} from '@types';
import AudioScreen from 'screens/AudioScreen';
import PostScreen from 'screens/PostScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigation = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {backgroundColor: '#F24C3D'},
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: () => <SpeakerSVG />,
        tabBarItemStyle: {alignSelf: 'center'},
      }}
      name="AudioTab"
      component={AudioScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <PostSVG />,
        tabBarItemStyle: {alignSelf: 'center'},
      }}
      name="PostTab"
      component={PostScreen}
    />
  </Tab.Navigator>
);

export default TabNavigation;
