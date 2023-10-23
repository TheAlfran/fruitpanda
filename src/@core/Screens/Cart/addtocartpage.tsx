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
  CartFooterText1,
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
  SubtotalContainer,
  TextQuantity,
} from "./addtocartstyle";
import { useCart } from "../../hooks/Cart/useCart";
import { BASE_URL } from "../../hooks/Global/baseURL";
import { useProductContext } from "./ProductContext";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
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
                      editable={false}
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
        <SubtotalContainer>
          <CartFooterText1>SubTotal:</CartFooterText1>
          <CartFooterText>₱{totalPrice}</CartFooterText>
        </SubtotalContainer>
        <CartFooterButton onPress={checkoutClicked}>
          <FontAwesome5Icon name="shopping-cart" size={15} color="#fff" />
          <CartFooterButtonText>  Checkout</CartFooterButtonText>
        </CartFooterButton>
      </CartFooterContainer>
    </CartParentContainer>
  );
}
