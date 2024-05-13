import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const GS = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.cbBlue,
        marginBottom: 12,
    },
    simpleContainer: {
        flex: 1,
        
    }
})