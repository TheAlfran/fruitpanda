import React from "react";
import { FlatList } from "react-native";
import {
  AddQuantity,
  AddQuantityText,
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
  CombineContainer,
  QuantityAddContainer,
  ReduceQuantity,
  ReduceQuantityText,
  TextQuantity,
} from "./addtocartstyle";
import { useCart } from "../../hooks/Cart/useCart";
import { BASE_URL } from "../../hooks/Global/baseURL";
import { useProductContext } from "./ProductContext";
const baseUrl = `${BASE_URL}`;

export default function AddToCartPage() {
  const { selectedProducts, totalPrice, checkoutClicked } = useCart();
  const { decrementProductCustomValue, incrementProductCustomValue } =
    useProductContext();

  return (
    <CartParentContainer>
      <CartChildContainter>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item: any, index) => {
            return item && item.uid ? item.uid : index.toString();
          }}
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
                  <CombineContainer>
                    <QuantityAddContainer>
                      <ReduceQuantity
                        onPress={() => decrementProductCustomValue(item.uid)}
                      >
                        <ReduceQuantityText> - </ReduceQuantityText>
                      </ReduceQuantity>
                      <TextQuantity
                        placeholder={item.attributes.customValue.toString()}
                      />
                      <AddQuantity
                        onPress={() => incrementProductCustomValue(item.uid)}
                      >
                        <AddQuantityText> + </AddQuantityText>
                      </AddQuantity>
                    </QuantityAddContainer>
                  </CombineContainer>
                </>
              )}
            </CartSecondChildContainter>
          )}
        />
      </CartChildContainter>
      <CartFooterContainer>
        <CartFooterText>₱{totalPrice}</CartFooterText>
        <CartFooterButton onPress={checkoutClicked}>
          <CartFooterImage
            source={require("../../../../assets/categories/checkout.png")}
          />
          <CartFooterButtonText>Checkout</CartFooterButtonText>
        </CartFooterButton>
      </CartFooterContainer>
    </CartParentContainer>
  );
}
