import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart', { product })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: width * 0.85,
    height: height * 0.45,
    marginBottom: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: '#2c3e50',
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    color: '#e74c3c',
    marginBottom: 30,
    fontWeight: '600',
  },
});

export default ProductDetailsScreen;
