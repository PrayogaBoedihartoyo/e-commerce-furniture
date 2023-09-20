import { FlatList, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import adsAssets from '../../../assets/neom-Z6YxSbcIXT0-unsplash.jpg';
import React from 'react';

export default function AdsPromotion() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Promosi Minggu Ini</Text>
      <FlatList
        style={{ marginTop: 5 }}
        numColumns={2}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={styles.pressableComponent}>
            <Image source={adsAssets} style={styles.imagePressable} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  imagePressable: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  }
});
