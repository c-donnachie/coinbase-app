import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./MyStack";
import { AuthStack } from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from '@/features/auth/auth'
import { Splash } from "@/screens/Spash/Splash";

export const RootNavigator = () => {

    //@ts-ignore
    const { userToken, isLoading } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {
        getValue()
    }, [])

    const getValue = async () => {
        try {
            const value = await AsyncStorage.getItem('@token')
            if (value !== null) {
                console.log('data restored: ', value)
                dispatch(restoreToken(value))
            } else {
                console.log('no data')
                dispatch(restoreToken(null))
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading) return <Splash />

    return (
        <NavigationContainer>
            {userToken ? <MyStack /> : <AuthStack />}

        </NavigationContainer>
    )
}