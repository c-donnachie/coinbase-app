import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'

interface CustomHeaderProps {
    title: string;
}

const CustomHeader = ({ title }: CustomHeaderProps) => {
    return (
        <SafeAreaView style={s.container}>
            <Text>{title}</Text>
        </SafeAreaView>
    )
}

export default CustomHeader

const s = StyleSheet.create({
    container: {
        height: 90,
        width: '100%',
        backgroundColor: 'lightblue',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    }
})