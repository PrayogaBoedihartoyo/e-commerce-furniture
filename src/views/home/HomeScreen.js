import React from "react";
import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { IconButton } from 'react-native-paper';

function HomeScreen() {
    return (
      <View style={styles.container}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={12} color="black" />
          <TextInput placeholder="search"></TextInput>
        </View>
          <IconButton icon="menu"/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
  }
});

export default HomeScreen;
