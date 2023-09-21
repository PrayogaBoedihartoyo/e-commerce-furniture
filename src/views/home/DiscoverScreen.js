import React from 'react';
import { View, StyleSheet, Dimensions, Text, Linking, Platform, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';
import { Card, IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
const widht = Dimensions.get('window').width;
const markerImage = require('../../../assets/icons8-marker-48.png');

const dataCarousel = [
  {
    coordinate: { latitude: 37.8025259, longitude: -122.4351431 },
    title: 'Wekea Drop Store',
    address: '1234 Main St, San Francisco, CA 94122',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    coordinate: { latitude: 37.7896386, longitude: -122.421646, },
    title: 'Wekea Drop Store 2',
    address: '1234 Main St, San Francisco, CA 94122',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    coordinate: { latitude: 37.7665248, longitude: -122.4161628 },
    title: 'Wekea Drop Store 3',
    address: '1234 Main St, San Francisco, CA 94122',
    image:
      'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];
export default function DiscoverScreen() {
  const scrollCarousel = React.useRef(null);
  const mapAnimation = new Animated.Value(0);
  const mapRef = React.useRef(null);
  const carouselAnimation = new Animated.Value(0);
  const carouselAnimationRef = React.useRef(carouselAnimation);
  const [isShowCarousel, setIsShowCarousel] = React.useState(true);

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const onPressMarker = (mapData) => {
    const marderId = mapData._targetInst.return.key;
    scrollCarousel.current.scrollTo({ index: +marderId, animated: true })
  }

  const interpolations = dataCarousel.map((_, index) => {
    const inputRange = [
      [index - 1] * widht,
      index * widht,
      [index + 1] * widht
    ];
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp'
    });
    return { scale }
  })
  const carouselInterpolate = carouselAnimationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1000],
    extrapolate: 'clamp'
  })
  const onHideCarousel = () => {
    setIsShowCarousel((prev) => !prev);
    Animated.timing(carouselAnimationRef.current, {
      toValue: isShowCarousel ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        ref={mapRef}
        initialRegion={region}
        style={StyleSheet.absoluteFillObject} >
        {
          dataCarousel.map((item, index) => (
            <Marker key={index} coordinate={item.coordinate} onPress={(e) => onPressMarker(e)}>
              <Animated.Image source={markerImage} style={{
                width: 30,
                transform: [
                  {
                    scale: interpolations[index].scale
                  }
                ]
              }
              } />
            </Marker>
          ))
        }
      </MapView>
      <IconButton icon={isShowCarousel ? "close" : "menu"} mode="contained" onPress={onHideCarousel}/>
      <View style={{position: 'absolute', top: 100, left: 50}} />
      <Animated.View style={{
        alignItems: 'center',
        transform: [
          {
            translateY: carouselInterpolate
          },
        ],
      }}>
        <Carousel
          ref={scrollCarousel}
          loop
          width={widht -30}
          height={250}
          style={{
            top: 20,
          }}
          autoPlay
          data={dataCarousel}
          scrollAnimationDuration={1000}
          onProgressChange={(progress) => {
            mapAnimation.setValue(Math.abs(progress));
          }}
          onSnapToItem={(index) => {
            const { coordinate } = dataCarousel[index];
            mapRef.current.animateToRegion({
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            })
          }}
          renderItem={({ item }) => (
            <Card style={{ overflow: 'hidden' }}>
              <Card.Cover source={{ uri: item.image }} style={{ height: 150, borderRadius: 0 }} />
              <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                  <Text>{item.address}</Text>
                </View>
                <IconButton mode="outlined" onPress={() => Linking.openURL(Platform.OS === 'ios' ? `maps://app?daddr=${item.coordinate.latitude},${item.coordinate.longitude}` : `google.navigation:q=${item.coordinate.latitude},${item.coordinate.longitude}`)} icon={() => <Ionicons size={24} name="locate" />} />
              </Card.Content>
            </Card>
          )}
        />
      </Animated.View>
    </View>
  );
}
