import { StyleSheet, Platform, PlatformColor } from "react-native";
import Colors from "@/constants/Colors";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            default: {
                backgroundColor: Colors.secondary
            }
        })
    },
    text: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    test: {
        height: '20%',
        backgroundColor: 'pink',
        borderRadius: 8,
    },
    input: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        marginTop: 300,
        alignSelf: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        padding: 13,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor("systemBlue")
            },
            default: {
                backgroundColor: 'white'
            }
        })
    },
})
