import { MyButton } from '@/components/MyButton/MyButton'
import { MyInput } from '@/components/MyInput/MyInput'
import { GS } from '@/styles/global'
import { StyleSheet, Text, View } from 'react-native'

export const SignUp = ( ) => {
    return (
        <View style={GS.screenContainer}>
            <Text style={GS.title}>SignUp</Text>
            <MyInput label={'Email'} />
            <MyInput label={'Password'} secureTextEntry />
            <MyButton title={'Sign up'} />
            <MyButton title={'Login'} onPress={() => {}} />
        </View>
    )
}

const s = StyleSheet.create({

})