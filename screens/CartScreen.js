import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }, [route.params?.product]);

  const placeOrder = () => {
    alert('Order placed with Cash on Delivery!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <Button title="Place Order (COD)" onPress={placeOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  itemContainer: {
    marginBottom: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e1e8ed',
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: '500',
    color: '#2c3e50',
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    color: '#7f8c8d',
    fontWeight: '400',
  },
});

export default CartScreen;
