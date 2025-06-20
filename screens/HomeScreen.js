import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const products = [
  { id: '1', name: 'dodge challenger', price: 1000000, image: 'https://miauto.gt/wp-content/uploads/2019/02/MARCAS-DE-CARROS-10.jpg' },
  { id: '2', name: 'ford bronco', price: 2000000, image: 'https://cdn.imagin.studio/getImage?customer=arelcerokm&countryCode=AR&zoomLevel=30&width=800&make=ford&modelFamily=bronco&modelRange=bronco&bodySize=5' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  itemContainer: {
    marginBottom: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e8ed',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: '500',
    color: '#2c3e50',
  },
});

export default HomeScreen;
