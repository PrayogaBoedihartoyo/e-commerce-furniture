import {Button, Text, View} from "react-native";

function DetailsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button onPress={() => navigation.goBack()} title='Kembali'></Button>
        </View>
    )
}

export default DetailsScreen;
