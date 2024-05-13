import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, useWindowDimensions, TouchableWithoutFeedback } from 'react-native'
import { useRef, useState } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GoBackStack } from '@/components/GoBackStack/GoBackStack';

// interface NavigationParams {
//   Home: undefined;
//   News: undefined;
// }
{/* <NavigationProp<NavigationParams>> */ }

export function Settings() {
  const { goBack } = useNavigation()

  const { height, width } = useWindowDimensions()

  const sheetRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const snapPoins = ['65%']

  const handlePresentModal = () => {
    sheetRef.current?.present()
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    sheetRef.current?.close()
    setIsOpen(false)
  }

  const myBottonSheet =
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoins}
      backgroundStyle={{
        borderRadius: 20
      }}
    >
      <View>
        <TouchableOpacity
          onPress={handleCloseModal}
        >
          <Text>cerrar</Text>
        </TouchableOpacity>
        <Text>Holaa</Text>
      </View>
    </BottomSheetModal>

  const bgColor = isOpen ? 'rgba(255, 0, 0, 0.5)' : 'white';

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={[s.container, { backgroundColor: bgColor }]}>
        <GoBackStack />
        <Text>Settings</Text>

        <Button
          title="Abir"
          onPress={handlePresentModal} />

        <ScrollView>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={handlePresentModal}
          >
            <View style={[s.card, { width: width * .9 }]}>
              <Text>Hola</Text>
            </View>
          </TouchableWithoutFeedback>

        </ScrollView>


        {myBottonSheet}

      </SafeAreaView>

    </BottomSheetModalProvider>

  )
}


const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    backgroundColor: Colors.cbBlue,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  }
})