import { ScrollView, Text, View , StyleSheet} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import React from 'react';

export default function Category() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array.from(Array(10)).map(() => (
          <IconButton
            icon={({ color, size }) => <View style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Ionicons name="home-outline" size={size} color={color} />
              <Text style={{
                fontSize: 10,
              }}>Home</Text>
            </View>}
            style={styles.iconButton}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50,
  },
});
