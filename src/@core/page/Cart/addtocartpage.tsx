import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useProductContext } from './ProductContext';
import { CartChildContainter, CartFooterContainer, CartImageAdd, CartImageAddContainer, CartParentContainer, CartSecondChildContainter, CartText, CartTextContainer, CartTitle } from './addtocartstyle';

export default function AddToCartPage() {
  const { selectedProducts } = useProductContext();

  return (
    <CartParentContainer>
      <CartTitle>My Cart:</CartTitle>
      <CartChildContainter>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (

            <CartSecondChildContainter>
              {item && (
                <>
                  <CartImageAddContainer>
                    <CartImageAdd source={{ uri: `http://192.168.1.4:1337${item.attributes.image.data[0].attributes?.url}` }} />
                  </CartImageAddContainer>
                  <CartTextContainer>
                    <CartText>{item.attributes.name}</CartText>
                    <CartText>₱{item.attributes.price}</CartText>
                    <CartText>QTY: {item.attributes.customValue}</CartText>
                  </CartTextContainer>
                </>
              )}
            </CartSecondChildContainter>
          )}
        />
      </CartChildContainter>
      <CartFooterContainer>
        
      </CartFooterContainer>
    </CartParentContainer> 
  );
}
