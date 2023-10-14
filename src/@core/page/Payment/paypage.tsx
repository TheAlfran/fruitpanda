import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  AmountInput,
  PayChildContainer,
  PayContainer,
  PayContainer1,
  PayContainer2,
  PayContainer3,
  PayContainer4,
  PayContainerSub,
  PayFooterTitle,
  PayFourthContainer,
  PayLineContainer,
  PaySecondChildContainer,
  PaySecondTitle,
  PaySixthContainer,
  PayText1,
  PayText2,
  PayText3,
  PayText4,
  PayText5,
  PayText6,
  PayThirdContainer,
} from "./paystyle";
import { useProductContext } from "../Cart/ProductContext";

export default function PayPage() {
  const { selectedProducts } = useProductContext();
  const totalPrice = selectedProducts.reduce(
    (total, product) =>
      total + product.attributes.price * (product.attributes.customValue || 0),
    0
  );
  const totalPriceWithVAT = totalPrice * 0.12;
  const deliveryFee = 20;

  return (
    <PayContainer>
      <PayChildContainer>
        <PaySecondChildContainer>
          <PaySecondTitle>Summary</PaySecondTitle>
        </PaySecondChildContainer>
        <PayThirdContainer>
          <PayContainerSub>
            <PayContainer1>
              <PayText1>Details</PayText1>
            </PayContainer1>
            <PayContainer2>
              <PayText2>Amount</PayText2>
            </PayContainer2>
          </PayContainerSub>
          <PayLineContainer></PayLineContainer>
          <PayFourthContainer>
            <PayContainer3>
              <PayText3>Subtotal:</PayText3>
              <PayText3>VAT:</PayText3>
              <PayText3>Delivery Fee:</PayText3>
              <PayText5>Total: </PayText5>
            </PayContainer3>
            <PayContainer4>
              <PayText4>₱{totalPrice}</PayText4>
              <PayText4>₱{totalPriceWithVAT}</PayText4>
              <PayText4>₱{deliveryFee}</PayText4>
              <PayText6>
                ₱{deliveryFee + totalPrice + totalPriceWithVAT}
              </PayText6>
            </PayContainer4>
          </PayFourthContainer>
          <PayLineContainer></PayLineContainer>
        </PayThirdContainer>
      </PayChildContainer>
      <PaySixthContainer>
        <PayFooterTitle>Payment Here</PayFooterTitle>
        <AmountInput placeholder="Enter Amount"></AmountInput>
      </PaySixthContainer>
    </PayContainer>
  );
}
 