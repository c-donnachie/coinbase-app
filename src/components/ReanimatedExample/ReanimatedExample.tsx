import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler'

function SharedValues() {

    const randomWidth = useSharedValue(10)

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),

    }

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config)
        }
    })

    return (
        <>
            <Animated.View
                style={[
                    { height: 30, backgroundColor: 'gold', margin: 30 }, style
                ]}
            >

            </Animated.View>
            <Button
                title='Toggle'
                onPress={() => {
                    randomWidth.value = Math.random() * 350
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                }}
            />
        </>
    )
}

function Box() {

    const offset = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: withSpring(offset.value * 255, {
                    damping: 40,
                    stiffness: 90,
                })
            }]
        }
    })

    return (
        <>
            <Animated.View
                style={[s.box, animatedStyle]}
            >
                <Text style={{ color: 'white' }}>Celulares</Text>
            </Animated.View>

            <Button title='Move'
                onPress={() => offset.value = withSpring(Math.random())}
            />
        </>

    )
}

function Wobble() {
    const rotation = useSharedValue(0)

    const animatedSyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }]
        }
    })

    return (
        <>
            <Animated.View
                style={[s.box2,
                    {backgroundColor: 'tomato'},
                    animatedSyle]}
            />
            <Button title='Move'
                onPress={() => {
                    rotation.value = withSequence(
                        withTiming(-10, { duration: 50 }),
                        withRepeat(withTiming(25, { duration: 100 }), 5, true),
                        withTiming(0, {duration: 50})
                    )
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
                }}
            />
        </>
    )

}

function EventsExpample() {

    const startingPosition = 100
    const x = useSharedValue(startingPosition)
    const y = useSharedValue(startingPosition)

    const pressed = useSharedValue(false)

    const eventHandle = useAnimatedGestureHandler({
        
    })
}

const ReanimatedExample = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <SharedValues />
                <Box />
                <Wobble />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReanimatedExample

const s = StyleSheet.create({
    box: {
        width: 140,
        height: 40,
        backgroundColor: 'purple',
        borderRadius: 18, justifyContent: 'center',
        alignItems: 'center'
    },
    box2: {
        width: 100,
        height: 100,
        borderRadius: 14,
        alignSelf: 'center',
    }
})