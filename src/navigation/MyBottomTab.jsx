import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';

// Screens
import { HomeScreen } from '@/screens/HomeScreen/HomeScreen'
import { Portafolio } from '@/screens/Portafolio/Portafolio'
import Colors from '@/constants/Colors';

const MyTab = createBottomTabNavigator()

export const MyBottomTab = () => {
    return (
        <MyTab.Navigator
            labeled={false}
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: Colors.cbBlue,
            }}

        >
            <MyTab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {backgroundColor: 'tomato', color:'white'},
                        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
                    }}
                />
                <MyTab.Screen name="Portafolio" component={Portafolio}
                />

        </MyTab.Navigator>
    )
}


const styles = StyleSheet.create({})