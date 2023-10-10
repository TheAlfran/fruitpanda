import React from 'react';
import { View, Text, FlatList, Modal, Button } from 'react-native';
import { useProductContext } from './ProductContext';
import { CartChildContainter, CartChildPaymentModalContainer, CartFooterButton, CartFooterButtonText, CartFooterContainer, CartFooterText, CartImageAdd, CartImageAddContainer, CartModalFooter, CartParentContainer, CartParentPaymentModalContainer, CartSecondChildContainter, CartSecondChildPaymentModalContainer, CartText, CartText1, CartTextContainer, DetailsChildContainer, DetailsContainer, LineContainer, LineContainer1, OrderBodyContainer, OrderBodyText, OrderDetailsText, OrderTextContainer, OrderTextContainer1, PaymentAmount, PaymentName, PaymentNumber, PaymentText, TotalBox, WalletContainer } from './addtocartstyle';
import { useNavigation } from '@react-navigation/native';

export default function AddToCartPage() {
  const { selectedProducts } = useProductContext();
  const navigation = useNavigation<any>();
  const totalPrice = selectedProducts.reduce((total, product) => total + product.attributes.price * (product.attributes.customValue || 0), 0);
  const totalPriceWithVAT = totalPrice * .12;
  const deliveryFee = 20;
  const totalAll = totalPrice + totalPriceWithVAT + deliveryFee;

  // State for modal visibility
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <CartParentContainer>
      <CartChildContainter>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartSecondChildContainter>
              {item && (
                <>
                  <CartImageAddContainer>
                    <CartImageAdd source={{ uri: `http://192.168.1.4:1337${item.attributes.image.data[0].attributes?.url}` }} />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <CartChildPaymentModalContainer>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              title="Close Payment"
            />
            <CartSecondChildPaymentModalContainer>
              <OrderDetailsText>
                Order Summary
              </OrderDetailsText>
              <LineContainer></LineContainer>
              <OrderBodyContainer>
                <OrderTextContainer>
                  <OrderBodyText>
                    Sub Total:
                  </OrderBodyText>
                  <OrderBodyText>
                    VAT:
                  </OrderBodyText>
                  <OrderBodyText>
                    Deliver Fee:
                  </OrderBodyText>
                  <OrderBodyText>
                    Total:
                  </OrderBodyText>
                </OrderTextContainer>
                <OrderTextContainer1>
                  <OrderBodyText>
                    ₱{totalPrice}
                  </OrderBodyText>
                  <OrderBodyText>
                    ₱{totalPriceWithVAT.toFixed(2)}
                  </OrderBodyText>
                  <OrderBodyText>
                    ₱{deliveryFee}
                  </OrderBodyText>
                  <TotalBox>
                    <OrderBodyText>
                      ₱{totalAll}
                    </OrderBodyText>
                  </TotalBox>
                </OrderTextContainer1>
              </OrderBodyContainer>
            </CartSecondChildPaymentModalContainer>
            <CartModalFooter>
            <LineContainer1></LineContainer1>
              <PaymentText>
                Details:
              </PaymentText>
              <FlatList
                data={selectedProducts}
                keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
                renderItem={({ item }) => (
                  <DetailsContainer>
                    {item && (
                      <>
                        <DetailsChildContainer>
                          <CartText1>{item.attributes.customValue}x</CartText1>
                          <CartText1> {item.attributes.name}</CartText1>
                        </DetailsChildContainer>
                      </>
                    )}
                  </DetailsContainer>
                )}
              />
            </CartModalFooter>
          </CartChildPaymentModalContainer>
        </Modal>
        <CartFooterButton onPress={() => setModalVisible(true)}>
          <CartFooterButtonText>
            Checkout
          </CartFooterButtonText>
        </CartFooterButton>
      </CartFooterContainer>
    </CartParentContainer>
  );
}
