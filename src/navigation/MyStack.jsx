import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { Settings } from "@/screens/Settings/Settings";
import { News } from "@/screens/News/News";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import { MyBottomTab } from "./MyBottomTab";
import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { Onboarding } from "@/screens/Onborarding/Onboarding";

const HomeStack = createNativeStackNavigator()

export const navigatorConfig = {
    headerShown: true,
    headerTitleAlign: 'center',
    presentation: 'modal',
    gestureEnabled: true,
}

export const MyStack = () => {

    return (
        <HomeStack.Navigator
            screenOptions={
                {
                    headerShown: false,
                    headerTitleAlign: 'center',
                    presentation: 'fullScreenModal',
                    gestureEnabled: true,
                }
            }
        >
            <HomeStack.Screen name="Root" component={MyBottomTab}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen name="Settings" component={Settings}
            // options={{
            //     header: ({ route }) => <CustomHeader title={route.name} />,

            // }}
            />
            <HomeStack.Screen name="Onboarding" component={Onboarding}
                options={{headerShown: false}}
            />
            <HomeStack.Group
            >
                <HomeStack.Screen name="News" component={News}
                    options={{
                        headerBackTitle: "Volver"
                    }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}
