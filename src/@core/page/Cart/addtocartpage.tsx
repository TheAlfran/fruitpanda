import React from 'react';
import { View, Text, FlatList, Modal, Button } from 'react-native';
import { useProductContext } from './ProductContext';
import { CartChildContainter, CartFooterButton, CartFooterButtonText, CartFooterContainer, CartFooterText, CartImageAdd, CartImageAddContainer, CartModalFooter, CartParentContainer, CartSecondChildContainter, CartText, CartTextContainer } from './addtocartstyle';
import { useNavigation } from '@react-navigation/native';

export default function AddToCartPage() {
  const { selectedProducts } = useProductContext();
  const navigation = useNavigation<any>();
  const totalPrice = selectedProducts.reduce((total, product) => total + product.attributes.price * (product.attributes.customValue || 0), 0);
  const checkoutClicked = async () => {
    navigation.navigate('Checkout')
  }

  return (
    <CartParentContainer>
      <CartChildContainter>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
          showsVerticalScrollIndicator={ false}
          renderItem={({ item }) => (
            <CartSecondChildContainter>
              {item && (
                <>
                  <CartImageAddContainer>
                    <CartImageAdd source={{ uri: `http://192.168.1.8:1337${item.attributes.image.data.attributes?.url}` }} />
                  </CartImageAddContainer>
                  <CartTextContainer>
                    <CartText>{item.attributes.name}</CartText>
                    <CartText>QTY: {item.attributes.customValue}</CartText>
                    <CartText>₱{item.attributes.price}</CartText>
                  </CartTextContainer>
                </>
              )}
            </CartSecondChildContainter>
          )}
        />
      </CartChildContainter>
      <CartFooterContainer>
        <CartFooterText>
          ₱{totalPrice}
        </CartFooterText>
        <CartFooterButton onPress={checkoutClicked}>
          <CartFooterButtonText>
            Checkout
          </CartFooterButtonText>
        </CartFooterButton>
      </CartFooterContainer>
    </CartParentContainer>
  );
}
