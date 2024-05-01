import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {BottomSheetProvider} from './src/context/bottomSheetContext.tsx';
import AppNavigation from './src/navigation/AppNavigation.tsx';
import {store} from './src/services/store.ts';

const App = (): JSX.Element => (
  <NavigationContainer>
    <GestureHandlerRootView>
      <Provider store={store}>
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
