import {Platform, StyleSheet} from "react-native";

export const GlobalStyles = StyleSheet.create({
    safeAreaStyles: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 0 : 0
    }
})
