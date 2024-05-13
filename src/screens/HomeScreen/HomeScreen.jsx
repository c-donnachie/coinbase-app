import * as React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { GS } from '@/styles/global'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { BottomSContext } from '@/context/BottomSContext'
import { useDispatch } from 'react-redux'
import { signOut } from '@/features/auth/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Haptics from 'expo-haptics';

export const HomeScreen = () => {

  {/* <NavigationProp<NavigationParams>> */ }
  // Usa la interfaz NavigationProp para tipar el objeto de navegación
  const { navigate } = useNavigation();
  const { handleExpandPress } = React.useContext(BottomSContext)

  const dispatch = useDispatch()

  React.useEffect(() => {
    checkFirstLaunch()
  }, [])

  const checkFirstLaunch = async () => {
    const firstLaunch = await AsyncStorage.getItem('@firstLaunch')
    if (firstLaunch) {
      return
    } else {
      await AsyncStorage.setItem('@firstLauch', 'true')
      navigate('Onboarding')
    }
  }


  return (
    <View style={GS.screenContainer}>
      <Text style={GS.title}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigate('Settings')}
      >
        <Text>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await AsyncStorage.removeItem('@token')
          dispatch(signOut())
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        }}
      >
        <Text>Salir</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})
