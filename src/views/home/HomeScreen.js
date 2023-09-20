import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SearchBar from "../../components/Global/SearchBar";
import CardProduct from '../../components/Global/CardProduct';
import CarouselCustom from '../../components/Home/CustomCarousel';
import Category from '../../components/Home/Category';
import AdsPromotion from '../../components/Home/AdsPromotion';

function HomeScreen() {
    return (
      <ScrollView>
        <View style={styles.mainContaner}>
          <SearchBar/>
          <CarouselCustom/>
          <Category/>
          <AdsPromotion/>
          <CardProduct/>
        </View>
        <View style={{ marginTop: '15%' }}/>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainContaner: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});

export default HomeScreen;
