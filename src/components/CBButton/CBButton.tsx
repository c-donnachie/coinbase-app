import React, { FC } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Animated } from 'react-native'
import * as HapTics from 'expo-haptics'
import Colors from '@/constants/Colors'

interface CCButonProps {
    title: string
}

export const CBButton: React.FC<CCButonProps> = ({ title }) => {

    const animatedValue = new Animated.Value(1)

    const onPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.9,
            useNativeDriver: true
        }).start()
    }

    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true
        }).start()
    }

    const animatedStyle = {
        transform: [{ scale: animatedValue }]
    }

    return (
        <Animated.View style={[s.container, animatedStyle]}>
            <TouchableHighlight
                style={{borderRadius: 10}}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                onPress={() => {
                    HapTics.impactAsync(HapTics.ImpactFeedbackStyle.Light)
                }}
            >
                <View style={s.button}>
                    <Text style={s.text}>{title}</Text>
                </View>
            </TouchableHighlight>
        </Animated.View>
    )
}

const s = StyleSheet.create({
    container: {
        width: '85%',
        borderRadius: 8
    },
    button: {
        width: '100%',
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.cbBlue,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})