import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import React from 'react';

export default function CardProduct() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Popular</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 10 }}>
        {Array.from(Array(10)).map(() => (
          <Card style={styles.cardContainer}>
            <Card.Cover style={{ borderRadius: 0, height: 140 }} source={{ uri: 'https://picsum.photos/seed/1/200/300' }} />
            <Card.Content style={{ padding: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', }}>Card Title</Text>
              <Text style={{ fontSize: 10, }}>Card Subtitle</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    marginRight: 15,
    overflow: 'hidden',
  },
});
