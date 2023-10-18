import { Text, Modal, TouchableOpacity } from "react-native";
import {
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
import { usePayment } from "../../hooks/Payment/usePayment";

export default function PayPage() {
  const { totalPrice, deliveryFee, totalPriceWithVAT, isModalVisible, openModal, closeModal, userInput, setUserInput, handlePayment, overallTotal } = usePayment();
  

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
