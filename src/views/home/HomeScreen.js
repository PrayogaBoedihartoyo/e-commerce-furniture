import React from "react";
import { TextInput, View, StyleSheet, Dimensions, Image, ScrollView, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { IconButton } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

function HomeScreen() {
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
    return (
      <View style={styles.mainContaner}>
        {/* SearchBar Component */}
        <View style={styles.searchBarContainer}>
          <View style={[styles.searchBar, styles.borderShadow]}>
            <Ionicons name="search" size={12} color="black" />
            <TextInput placeholder="search"></TextInput>
          </View>
          <IconButton icon="menu"/>
        </View>

        {/* Carousel Component */}
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

        {/* Category Component */}
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
      </View>
    )
}

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  searchBarContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'gray',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: 'white',
  },
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50,
  }
});

export default HomeScreen;
