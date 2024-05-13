import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@/screens/AuthScreens/Login";
import { SignUp } from "@/screens/AuthScreens/SignUp";

const Auth = createNativeStackNavigator()

export const AuthStack = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="SignUp" component={SignUp} />
        </Auth.Navigator>

    )
}