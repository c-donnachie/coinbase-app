import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'

interface SequenceProps {
    children?: any
}

export const Sequence: React.FC<SequenceProps> = ({ children }) => {


    const animatedValue = new Animated.Value(1)

    Animated.loop(
        Animated.sequence([

            Animated.timing(animatedValue, {
                toValue: .96,
                useNativeDriver: true,
                duration: 500,
            }),
            Animated.timing(animatedValue, {
                toValue: 1,
                useNativeDriver: true,
                duration: 500
            })

        ])
    ).start()



    return (
        <Animated.View
            style={{ transform: [{ scale: animatedValue }] }}
        >
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})