import React from 'react';
import { View, Text } from 'react-native';
import { useProductContext } from './ProductContext'; 
import { CartChildContainter, CartImageAdd, CartParentContainer } from './addtocartstyle';

export default function AddToCartPage() {
  const productContext = useProductContext();

  if (!productContext) {
    
    return null;
  }
  
  const { selectedProduct } = productContext;

  return (
    <View>
      {selectedProduct && (
        <CartParentContainer>
          <CartChildContainter>
            <Text>Selected Product Name: {selectedProduct.attributes.name}</Text>
            <Text>Selected: Price {selectedProduct.attributes.price}</Text>
            <Text>Custom Value: {selectedProduct.attributes.customValue}</Text>
            <CartImageAdd source={{ uri: `http://192.168.1.4:1337${selectedProduct.attributes.image.data[0].attributes?.url}` }} />
          </CartChildContainter>
        </CartParentContainer>
      )}
    </View>
  );
}
