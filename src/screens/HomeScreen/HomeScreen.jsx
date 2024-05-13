import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { GS } from '@/styles/global'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { BottomSContext } from '@/context/BottomSContext'
import { useDispatch } from 'react-redux'
import { signOut } from '@/features/auth/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Haptics from 'expo-haptics';
// Define una interfaz para los parámetros de navegación
// interface NavigationParams {
//   Settings: undefined; // Define aquí los parámetros para cada pantalla
//   News: undefined;
// }

export const HomeScreen = () => {

  {/* <NavigationProp<NavigationParams>> */ }
  // Usa la interfaz NavigationProp para tipar el objeto de navegación
  const { navigate } = useNavigation();
  const { handleExpandPress } = useContext(BottomSContext)

  const dispatch = useDispatch()

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
