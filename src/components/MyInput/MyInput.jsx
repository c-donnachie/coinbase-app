import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export const MyInput = ({
    label,
    value,
    onChangeText,
    secureTextEntry,
}) => {
    return (
        <View style={s.container}>
            <TextInput
                placeholder={label}
                style={s.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        width: '90%',
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        padding: 12,
        borderColor: Colors.secondarySubtitle,
    }
})