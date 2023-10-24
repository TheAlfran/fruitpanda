import { Text, Modal, TouchableOpacity } from "react-native";
import {
 
  FooterButton,
  FooterContainer,
  FooterContainer2,
  FooterText,
  FooterTextButton,
 
  PayAddressLogo,
 
  PayAddressLogoContainer,
 
  PayAddressText,
 
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
  PayItemContainer1,
  PayItemsContainer,
  PayLineContainer,
  PayLocationImage,
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
  PaymentAddressContainer,
  PaymentAddressContainer1,
  PaymentAddressContainer2,
  PaymentInfoContainer,
  ProfileAddress,
  RatingContainer,
  RatingText,
  StoreLogoContainer,
  StoreName,

} from "./paystyle";
import { usePayment } from "../../hooks/Payment/usePayment";
import * as Progress from 'react-native-progress';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useCart } from "../../hooks/Cart/useCart";
import { FlatList } from "react-native-gesture-handler";
import { PayImageAdd, PayImageAddContainer, PayText, PayTextContainer } from "./paymentstyle";
import { BASE_URL } from "../../hooks/Global/baseURL";
const baseUrl = `${BASE_URL}`;

export default function PayPage() {
  const { totalPrice, deliveryFee, totalPriceWithVAT, isModalVisible, openModal, closeModal, userInput, setUserInput, handlePayment, overallTotal } = usePayment();
  const { selectedProducts } = useCart();
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
            <PaymentInfoContainer>
                <PaymentAddressContainer>
                <PayLocationImage source={require('../../../../assets/profileimages/map.png')} />
                  <PaymentAddressContainer1>
                    <ProfileAddress>
                      Alfranciss W. Dionsay  09670670612
                    </ProfileAddress>
                    <PayAddressLogoContainer>
                      <PayAddressLogo> HOME </PayAddressLogo>
                      <PayAddressText>
                        Nha Kauswagan CDOC
                      </PayAddressText>
                    </PayAddressLogoContainer>
                  </PaymentAddressContainer1>
                </PaymentAddressContainer> 
            </PaymentInfoContainer>
            <PaymentAddressContainer2>
                <StoreLogoContainer>
                  <FontAwesome5Icon name="store-alt" size={15} color="#000" />
                  <StoreName>   Fruit Panda</StoreName>
                  </StoreLogoContainer>
                  <RatingContainer>
                    <RatingText>Nice Choice! This products is highly rated at 5.0/5</RatingText>
                  </RatingContainer>
                  <PayItemsContainer>
                    <FlatList 
                    data={selectedProducts}
                    keyExtractor={(item: any, index) => {
                      return item && item.uid ? item.uid : index.toString();
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <PaySecondChildContainer>
                         {item && ( 
                          <>
                            <PayImageAddContainer>
                              <PayImageAdd
                              source={{
                                uri: `${baseUrl}${item.attributes.image.data.attributes?.url}`,
                              }}
                              />
                              
                            </PayImageAddContainer>
                            <PayTextContainer>
                                <PayText>Name: {item.attributes.name}</PayText>
                                <PayText>QTY: {item.attributes.customValue}</PayText>
                                <PayText>  </PayText>
                                <PayText>₱{item.attributes.price} </PayText>
                            </PayTextContainer>
                          
                          
                          </>
                         )}
                      </PaySecondChildContainer>
                    )}        
                    />
                  </PayItemsContainer>
                  
                </PaymentAddressContainer2>
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
