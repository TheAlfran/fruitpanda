import React from "react";
import { FlatList } from "react-native";
import {
  CartChildContainter,
  CartFooterButton,
  CartFooterButtonText,
  CartFooterContainer,
  CartFooterImage,
  CartFooterText,
  CartImageAdd,
  CartImageAddContainer,
  CartModalFooter,
  CartParentContainer,
  CartSecondChildContainter,
  CartText,
  CartTextContainer,
} from "./addtocartstyle";
import { useCart } from "../../hooks/Cart/useCart";
import { BASE_URL } from "../../hooks/Global/baseURL";
const baseUrl = `${BASE_URL}`;

export default function AddToCartPage() {
 
  const { selectedProducts, totalPrice, checkoutClicked } = useCart();

  return (
    <CartParentContainer>
      <CartChildContainter>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item, index) =>
            item && item.id ? item.id.toString() : index.toString()
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartSecondChildContainter>
              {item && (
                <>
                  <CartImageAddContainer>
                    <CartImageAdd
                      source={{
                        uri: `${baseUrl}${item.attributes.image.data.attributes?.url}`,
                      }}
                    />
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
        <CartFooterText>₱{totalPrice}</CartFooterText>
        <CartFooterButton onPress={checkoutClicked}>
          <CartFooterImage source={require('../../../../assets/categories/checkout.png')}/>
          <CartFooterButtonText>
            Checkout
          </CartFooterButtonText>
        </CartFooterButton>
      </CartFooterContainer>
    </CartParentContainer>
  );
}
