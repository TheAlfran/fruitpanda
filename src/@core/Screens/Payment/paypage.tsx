import { Text, Modal, TouchableOpacity } from "react-native";
import {
  AllTotalText,
  Liner,
  PayAddressLogo,
  PayAddressLogoContainer,
  PayAddressText,
  PayAllItemsButton,
  PayAllText,
  PayAllText1,
  PayAmount,
  PayButton2,
  PayButton2Text,
  PayDeliveryContainer,
  PayDeliveryContainer1,
  PayDeliveryContainer2,
  PayDeliveryText,
  PayDeliveryText2,
  PayDeliveryTitleContainer,
  PayItemsContainer,
  PayLocationImage,
  PayMethodChildContainer,
  PayMethodChildContainer1,
  PayMethodChildContainer2,
  PayMethodContainer,
  PayMethodContainer1,
  PayMethodContainer2,
  PayModalChildContainer,
  PayModalContainer,
  PayModalTitle,
  PaySecondChildContainer1,
  PaySelectionButton,
  PaySelectionButton1,
  PaySelectionButtonContainer,
  PaySelectionButtonTitle,
  PaySelectionButtonTitle2,
  PaySelectionContainer,
  PaySelectionContainer1,
  PaySelectionTitle,
  PayTitle,
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
import * as Progress from "react-native-progress";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useCart } from "../../hooks/Cart/useCart";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  PayImageAdd,
  PayImageAddContainer,
  PayText,
  PayTextContainer,
  PaymentText,
} from "./paymentstyle";
import { BASE_URL } from "../../hooks/Global/baseURL";
import { useState } from "react";
const baseUrl = `${BASE_URL}`;

export default function PayPage() {
  const {
    totalPrice,
    deliveryFee,
    totalPriceWithVAT,
    isModalVisible,
    openModal,
    closeModal,
    userInput,
    setUserInput,
    handlePayment,
    overallTotal,
  } = usePayment();
  const { selectedProducts } = useCart();
  const [selectedButton, setSelectedButton] = useState("");
  return (
    <ScrollView horizontal={false}>
            <PayModalContainer>
              <PayModalChildContainer>
                <PaymentInfoContainer>
                  <PaymentAddressContainer>
                    <PayLocationImage
                      source={require("../../../../assets/profileimages/map.png")}
                    />
                    <PaymentAddressContainer1>
                      <ProfileAddress>
                        Alfranciss W. Dionsay 09670670612
                      </ProfileAddress>
                      <PayAddressLogoContainer>
                        <PayAddressLogo> HOME </PayAddressLogo>
                        <PayAddressText>Nha Kauswagan CDOC</PayAddressText>
                      </PayAddressLogoContainer>
                    </PaymentAddressContainer1>
                  </PaymentAddressContainer>
                </PaymentInfoContainer>
                <PaymentAddressContainer2>
                  <StoreLogoContainer>
                    <FontAwesome5Icon name="store-alt" size={15} color="#000" />
                    <StoreName> Fruit Panda</StoreName>
                  </StoreLogoContainer>
                  <RatingContainer>
                  <FontAwesome5Icon
                            name="thumbs-up"
                            size={14}
                            color="#D70F64"
                          />
                    <RatingText>
                        Nice Choice! This products is highly rated at 5.0/5
                    </RatingText>
                  </RatingContainer>
                  <PayItemsContainer>
                    <FlatList
                      data={selectedProducts}
                      horizontal
                      keyExtractor={(item: any, index) => {
                        return item && item.uid ? item.uid : index.toString();
                      }}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <PaySecondChildContainer1>
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
                                <PayText>
                                  Product name: {item.attributes.name}
                                </PayText>
                                <PayText>
                                  QTY: {item.attributes.customValue}
                                </PayText>
                                <PayText> </PayText>
                                <PayText>₱{item.attributes.price} </PayText>
                              </PayTextContainer>
                            </>
                          )}
                        </PaySecondChildContainer1>
                      )}
                    />
                  </PayItemsContainer>
                  <PayDeliveryTitleContainer>
                    <PayTitle>Delivery Fees</PayTitle>
                    <PayDeliveryContainer>
                      <PayDeliveryContainer1>
                        <PayDeliveryText>Standard Delivery</PayDeliveryText>
                        <PayDeliveryText>₱ 20</PayDeliveryText>
                      </PayDeliveryContainer1>
                      <PayDeliveryContainer2>
                        <FontAwesome5Icon
                          name="truck"
                          size={15}
                          color="#D70F64"
                        />
                        <PayDeliveryText2>
                          Get by 2 to 3 business days
                        </PayDeliveryText2>
                      </PayDeliveryContainer2>
                    </PayDeliveryContainer>
                  </PayDeliveryTitleContainer>
                </PaymentAddressContainer2>
                <PaySelectionContainer>
                  <PaySelectionTitle>Select Payment Method</PaySelectionTitle>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <PaySelectionContainer1>
                      <PaySelectionButton
                        style={
                          selectedButton === "button1"
                            ? {
                                backgroundColor: "#f2dce8",
                                borderColor: "#D70F64",
                                borderWidth: 1,
                              }
                            : {}
                        }
                        onPress={() => setSelectedButton("button1")}
                      >
                        <PaySelectionButtonContainer>
                          <FontAwesome5Icon
                            name="wallet"
                            size={19}
                            color="#D70F64"
                          />
                          <PaySelectionButtonTitle>
                            {" "}
                            Fruit e-Wallet
                          </PaySelectionButtonTitle>
                        </PaySelectionButtonContainer>
                        <PaySelectionButtonTitle2>
                          Pay when you receive
                        </PaySelectionButtonTitle2>
                      </PaySelectionButton>
                      <PaySelectionButton1
                        style={
                          selectedButton === "button2"
                            ? {
                                backgroundColor: "#f2dce8",
                                borderColor: "#D70F64",
                                borderWidth: 1,
                              }
                            : {}
                        }
                        onPress={() => setSelectedButton("button2")}
                      >
                        <PaySelectionButtonContainer>
                          <FontAwesome5Icon
                            name="money-bill-wave"
                            size={19}
                            color="#D70F64"
                          />
                          <PaySelectionButtonTitle>
                            {" "}
                            Cash On Delivery
                          </PaySelectionButtonTitle>
                        </PaySelectionButtonContainer>
                        <PaySelectionButtonTitle2>
                          Fruit panda e-Wallet
                        </PaySelectionButtonTitle2>
                      </PaySelectionButton1>
                    </PaySelectionContainer1>
                  </ScrollView>
                </PaySelectionContainer>
                <PayMethodContainer>
                  {selectedButton === "button1" && (
                    <PayMethodContainer1>
                      <PayMethodChildContainer>
                        <PayMethodChildContainer1>
                          <AllTotalText>SubTotal for all the items:</AllTotalText>
                          <AllTotalText>Delivery Fee:</AllTotalText>
                          <AllTotalText>VAT:</AllTotalText>
                        </PayMethodChildContainer1>
                        <PayMethodChildContainer1>
                        <AllTotalText style={{fontWeight: "bold", fontSize: 13}}>₱{totalPrice}</AllTotalText>
                          <AllTotalText style={{fontWeight: "bold", fontSize: 13}}>₱{deliveryFee}</AllTotalText>
                          <AllTotalText style={{fontWeight: "bold", fontSize: 13}}>₱{totalPriceWithVAT.toFixed(2)}</AllTotalText>
                        </PayMethodChildContainer1>
                      
                      </PayMethodChildContainer>
                      <Liner></Liner>
                      <PayMethodChildContainer2> 
                        <PayAllText1>Total: <PayAllText1 style={{color: "#D70F64", fontWeight: "bold", fontSize: 16}}> ₱{overallTotal.toFixed(2)} </PayAllText1></PayAllText1>
                        <PayAllItemsButton> 
                        <PayAllText>Place Order</PayAllText>
                        </PayAllItemsButton>
                      </PayMethodChildContainer2>

                    </PayMethodContainer1>
                  )}
                  {selectedButton === "button2" && (
                    <PayMethodContainer2></PayMethodContainer2>
                  )}
                </PayMethodContainer>
              </PayModalChildContainer>
            </PayModalContainer>
          </ScrollView>
  );
}
