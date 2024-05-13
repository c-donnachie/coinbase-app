import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootNavigator } from '@/navigation/RootNavigator';
import { BottomSProvider } from '@/context/BottomSContext';
import { Provider } from 'react-redux';
import { store } from '@/app/store'

export default function App() {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Provider store={store}>

        <BottomSProvider>
          <RootNavigator />
        </BottomSProvider>

      </Provider>


      {/* <AppNavigator /> */}
      {/* <Test /> */}
      {/* <ReanimatedExample/> */}


    </GestureHandlerRootView>
  );
}
