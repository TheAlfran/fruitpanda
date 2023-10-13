import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AmountInput,
  FooterButton,
  FooterContainer,
  FooterContainer2,
  FooterText,
  FooterTextButton,
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
  PaySummaryImage,
  PayText1,
  PayText2,
  PayText3,
  PayText4,
  PayText5,
  PayText6,
  PayThirdContainer,
} from "./paystyle";
import { useProductContext } from "../Cart/ProductContext";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

export default function PayPage() {
  const { selectedProducts, clearCart } = useProductContext();
  const totalPrice = selectedProducts.reduce(
    (total, product) =>
      total + product.attributes.price * (product.attributes.customValue || 0),
    0
  );
  const navigation = useNavigation<any>();
  const totalPriceWithVAT = totalPrice * 0.12;
  const deliveryFee = 20;

  const [isModalVisible, setModalVisible] = useState(false);

  const handleNavigation = async () => {
    navigation.navigate('Navigate')
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const overallTotal = totalPrice + deliveryFee + totalPriceWithVAT;
  const quantityValue = selectedProducts.map(
    (product) => product.attributes.customValue || 0
  );

  const priceProduct = selectedProducts.map(
    (product) => product.attributes.price || 0
  );

  const nameProduct = selectedProducts.map(
    (product) => product.attributes.name
  );

  const [userInput, setUserInput] = useState(0);

  const handlePayment = () => {
    if (userInput > overallTotal) {
      // Prepare the data to be sent
      const receiptData = selectedProducts.map((product) => ({
        name: product.attributes.name,
        price: product.attributes.price,
        quantity: product.attributes.customValue || 0,
        subtotal: product.attributes.price * (product.attributes.customValue || 0),
        vat: product.attributes.price * 0.12,
        alltotal: product.attributes.price * (product.attributes.customValue || 0) + 20 + product.attributes.price * 0.12,
        payment: userInput,
      }));
  
      // Make a POST request to the Strapi API
      axios.post("http://192.168.1.77:1337/api/receipt2s", { 
        data: {
          Receipt: receiptData // Add all the receipt data to the Receipt component
        }
      })
      .then((response) => {
        console.log('Success:', response.data.data);
        alert("Payment done");
        clearCart(); // Clear the cart
        setUserInput(0);
      })
      .catch((error) => {
        console.error('Error:', error);
        console.error('Error Details:', error.response.data);
        alert("Payment rejected");
      });
      handleNavigation();
    } else {
      alert("Payment rejected");
    }
  };
  

  return (
    <PayContainer>
      <PayChildContainer>
        <PaySecondChildContainer>
          <PaySecondTitle>Summary</PaySecondTitle>
          <PaySummaryImage source={require('../../../../assets/categories/expenses.png')}/>
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
                ₱{overallTotal.toFixed(2)}
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
        <FooterContainer>
            <FooterText>by clicking "Pay Items!" you will agree on</FooterText>
            <FooterContainer2>
              <FooterButton>
                <FooterTextButton>Terms and Conditions</FooterTextButton>
              </FooterButton>
              <FooterText> and </FooterText>
              <FooterButton>
                <FooterTextButton>Privacy Policy</FooterTextButton>
              </FooterButton>
            </FooterContainer2>
          </FooterContainer>
        <Modal visible={isModalVisible}>
          <PayModalContainer>
            <PayModalChildContainer>
              <PayModalTitle>Payments</PayModalTitle>
              <PayAmount
                value={userInput.toString()}
                onChangeText={(text) => setUserInput(Number(text))}
              ></PayAmount>
              <PayButton2 onPress={handlePayment}>
                <PayButton2Text>Submit Payment!</PayButton2Text>
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
