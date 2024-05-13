import { StyleSheet, Text, View } from 'react-native'
import { GS } from '@/styles/global'
import { MyInput } from '@/components/MyInput/MyInput'
import { MyButton } from '@/components/MyButton/MyButton'


export const SignUp = ({ navigation }) => {

    return (
        <View style={GS.screenContainer}>
            <Text style={GS.title}>SignUp</Text>
            <MyInput label={'Email'} />
            <MyInput label={'Password'} secureTextEntry />
            <MyButton title='Sing Up' />
            <MyButton title='Login' onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

const styles = StyleSheet.create({

})