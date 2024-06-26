import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { Home } from "@/screens/Home/Home";
import { Actions } from "@/screens/Actions/Actions";
import { News } from "@/screens/News/News";
import { Portafolio } from "@/screens/Portafolio/Portafolio";
import { Prices } from "@/screens/Prices/Prices";
import { Settings } from "@/screens/Settings/Settings";

import { TabBar } from "@/components/TabBar/TabBar";

const HomeStackNavigator = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Home" component={Home} />
            <HomeStackNavigator.Screen name="News" component={News} />
        </HomeStackNavigator.Navigator>
    )
}

const TabBarNavigator = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>

            <TabBarNavigator.Screen name="Home" component={Home} />
            <TabBarNavigator.Screen name="Portafolio" component={Portafolio} />
            <TabBarNavigator.Screen name="Actions" component={Actions} />
            <TabBarNavigator.Screen name="Prices" component={Prices} />
            <TabBarNavigator.Screen name="Settings" component={Settings} />

        </TabBarNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator