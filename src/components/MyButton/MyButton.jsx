import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export const MyButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={s.button} onPress={onPress}>
            <Text style={s.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    button: {
        width: '90%',
        height: 45,
        backgroundColor: Colors.cbBlue,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})