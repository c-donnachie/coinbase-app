import * as React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '@/constants/Colors'
import { MyButton } from '@/components/MyButton/MyButton'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Onboarding = () => {

    const { navigate } = useNavigation()

    const handlePress = () => {
        registerForPushNotificationsAsync()
            .then(async token => {
                await AsyncStorage.setItem('@pushToken', token)
                navigate('Home')
            })
            .catch(error => {
                console.log(error)
                navigate('Home')
            })
    }
Notifications.getExpoPushTokenAsync
    async function registerForPushNotificationsAsync() {
        let token;
        if (Device.isDevice) {
          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('fail to get token');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log('this is the token', token);
        } else {
          return;
        }
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        return token;
      }

    return (
        <View style={s.container}>
            <Text style={s.title}>Welcome to my App</Text>

            <View style={s.featureContainer}>
                <Image
                    style={s.icon}
                    source={require('../../../assets/arrows.png')}
                />
                <View style={{ flex: 1 }}>
                    <Text style={s.subTitle}>Manage daily tasks</Text>
                    <Text style={s.subHeadline}>
                        My app is a simple app that help you to increase your productivity.
                    </Text>
                </View>
            </View>

            <View style={s.featureContainer}>
                <Image
                    style={s.icon}
                    source={require('../../../assets/bell.png')}
                />
                <View style={{ flex: 1 }}>
                    <Text style={s.subTitle}>Notifications</Text>
                    <Text style={s.subHeadline}>
                        Please allow us to notify you when it's time to do you tasks.
                    </Text>
                </View>
            </View>

            <MyButton title={'Continue'} onPress={handlePress} />

        </View>
    )
}

const iphoneHeight = useWindowDimensions.height

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 150,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: iphoneHeight > 800 ? 70 : 50,
        marginTop: 100,
        color: Colors.cbBlue,
    },
    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 22,
        color: Colors.cbBlue,
    },
    subHeadline: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        color: Colors.black,
    },
    featureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    icon: {
        width: 42,
        height: 42,
        marginRight: 20,
        resizeMode: 'contain',
    }
})