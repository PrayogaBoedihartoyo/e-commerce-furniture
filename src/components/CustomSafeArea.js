import React from "react";
import {SafeAreaView} from "react-native";
import {GlobalStyles} from "../styles/GlobalStyles";

export default function CustomSafeArea({children}) {
    return (
        <SafeAreaView style={GlobalStyles.safeAreaStyles}>
            {children}
        </SafeAreaView>
    )
}
