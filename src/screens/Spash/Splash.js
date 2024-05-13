import { GS } from '@/styles/global'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

export const Splash = () => {
    return (
        <View style={GS.screenContainer}>
            <Text>Welcome</Text>
            <ActivityIndicator size='large' />
        </View>
    )
}

const s = StyleSheet.create({

})