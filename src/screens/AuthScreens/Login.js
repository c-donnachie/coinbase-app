import { MyButton } from '@/components/MyButton/MyButton'
import { MyInput } from '@/components/MyInput/MyInput'
import { GS } from '@/styles/global'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { signIn } from '@/features/auth/auth'

export const Login = () => {

    const [token, setToken] = useState('');
    const dispatch = useDispatch()

    const save = async (value) => {
        try {
            await AsyncStorage.setItem('@token', value)
            dispatch(signIn(value))
            console.log('data saved')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={GS.screenContainer}>
            <Text style={GS.title}>SignUp</Text>
            <MyInput label={'Email'}
                value={token}
                onChangeText={setToken}
            />
            <MyInput label={'Password'} secureTextEntry />
            <MyButton
                title={'Sign In'}
                onPress={() => save(token)}
            />
            <MyButton
                title={'Sign Up'}
                onPress={() => { }}
            />
        </View>
    )
}

const s = StyleSheet.create({

})