import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { IconButton } from 'react-native-paper';
import React from 'react';

export default function SearchBar() {
  return (
  <View style={styles.searchBarContainer}>
    <View style={[styles.searchBar, styles.borderShadow]}>
      <Ionicons name="search" size={12} color="black" />
      <TextInput placeholder="search"></TextInput>
    </View>
    <IconButton icon="menu"/>
  </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  }
});
