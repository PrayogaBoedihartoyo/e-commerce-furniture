import React from "react";
import {Button, Text, View} from "react-native";

function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Details', {itemId: 40})} title='Pergi Ke Halaman Detail'></Button>
        </View>
    )
}

export default HomeScreen;
