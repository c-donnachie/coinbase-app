import { StyleSheet, Text, View, TouchableHighlight, Animated, PlatformColor, useWindowDimensions } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics'

interface BtnProps {
    title: string
}

const Btn: React.FC<BtnProps> = ({ title }) => {
    
    const {width, height} = useWindowDimensions()

    const animatedValue = new Animated.Value(1)

    const onPressIn = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        Animated.spring(animatedValue, {
            toValue: 0.96,
            useNativeDriver: true,
            speed: 500,
        }).start()
    }

    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
            speed: 500,
        }).start()
    }

    const animatedStyle = {
        transform: [{ scale: animatedValue }]
    }

    return (
        <Animated.View
            style={[s.container, animatedStyle]}
        >
            <TouchableHighlight
                style={s.btn}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                underlayColor={'none'}
            >
                <Text style={s.text}>{title}</Text>
            </TouchableHighlight>

        </Animated.View>
    )
}

export default Btn

const s = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: PlatformColor('systemBlue'),
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .25,
        shadowRadius: 3.84,
        elevation: 5
    },
    text: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
})