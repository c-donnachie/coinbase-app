import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Arrow from '@/assets/Arrow-Left.png'
import * as Haptics from 'expo-haptics'

export const GoBackStack = () => {
    const { goBack } = useNavigation()
    return (
        <View
            style={s.container}
        >
            <TouchableHighlight
                style={s.button}
                onPress={() => {
                    goBack()
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
            >
                <Image source={Arrow} />
            </TouchableHighlight>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        marginTop: 12,
        paddingLeft: 18,
        paddingRight: 18,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: '50%',
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})