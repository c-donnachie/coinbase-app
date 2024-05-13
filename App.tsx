import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootNavigator } from '@/navigation/RootNavigator';
import { BottomSProvider } from '@/context/BottomSContext';
import { Provider } from 'react-redux';
import { store } from '@/app/store'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})


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
