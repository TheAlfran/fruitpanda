import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AmountInput,
  PayAmount,
  PayButton,
  PayButton2,
  PayButton2Text,
  PayButtonText,
  PayChildContainer,
  PayContainer,
  PayContainer1,
  PayContainer2,
  PayContainer3,
  PayContainer4,
  PayContainerSub,
  PayFooterTitle,
  PayFourthContainer,
  PayImage,
  PayLineContainer,
  PayModalChildContainer,
  PayModalContainer,
  PayModalTitle,
  PaySecondChildContainer,
  PaySecondTitle,
  PaySeventhContainer,
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

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  
  
  
  

  

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
              <PayText4>₱{totalPriceWithVAT.toFixed(2)}</PayText4>
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
        <PaySeventhContainer>
          <PayImage
            source={require("../../../../assets/categories/payment.png")}
          />
          <PayFooterTitle>Payment Here</PayFooterTitle>
        </PaySeventhContainer>
        <PayButton onPress={openModal}>
          <PayButtonText>Pay Items!</PayButtonText>
        </PayButton>
        <Modal visible={isModalVisible}>
          <PayModalContainer>
            <PayModalChildContainer>
            <PayModalTitle>Payments</PayModalTitle>
            <PayAmount ></PayAmount>
            <PayButton2>
              <PayButton2Text>
                Submit Payment!
              </PayButton2Text>
            </PayButton2>

            <TouchableOpacity onPress={closeModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
            </PayModalChildContainer>
          </PayModalContainer>
        </Modal>
      </PaySixthContainer>
    </PayContainer>
  );
}
