import { SafeAreaView, StyleSheet, TextInput, Image, Text, View, useWindowDimensions, Platform, PlatformColor, Dimensions } from 'react-native'
import React from 'react'
import { s } from './TestStyles'
import Btn from '@/components/Btn/Btn'
import { FontAwesome } from '@expo/vector-icons'
import { Sequence } from '@/components/Sequence/Sequence'

export const Test = () => {

    const { height, width } = useWindowDimensions()

    return (
        <View
            style={s.container}
        >

            <Text style={s.text}>Hello</Text>

            <Btn title='Press me' />

            <Sequence>
                <FontAwesome name='bell' size={50} color={'gold'} />
            </Sequence>



        </View>
    )
}


