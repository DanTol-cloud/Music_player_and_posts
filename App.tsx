import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetProvider} from 'context/bottomSheetContext.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {index} from 'services/store';

import AppNavigation from './src/navigation/AppNavigation.tsx';

const App = (): JSX.Element => (
  <NavigationContainer>
    <GestureHandlerRootView>
      <Provider store={index}>
        <BottomSheetProvider>
          <SafeAreaView style={{flex: 1}}>
            <AppNavigation />
          </SafeAreaView>
        </BottomSheetProvider>
      </Provider>
    </GestureHandlerRootView>
  </NavigationContainer>
);

export default App;
