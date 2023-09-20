import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const widht = Dimensions.get('window').width;
const dataCarousel = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/1/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/2/200/300',
  }
];

export default function CarouselCustom() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Carousel
        loop
        width={widht -30}
        height={200}
        autoPlay
        data={dataCarousel}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <Image
            style={styles.imageCarousel}
            source={{ uri: dataCarousel[index].image }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
