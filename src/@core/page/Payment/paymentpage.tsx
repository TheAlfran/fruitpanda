import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  AgreementContainer,
  AgreementText,
  CheckboxButton,
  DetailsContainer,
  DetailsImage,
  PaymentButton,
  PaymentButtonContainer,
  PaymentButtonText,
  PaymentChildContainer,
  PaymentDeleteButton,
  PaymentDeleteButtonText,
  PaymentFooter,
  PaymentImage,
  PaymentImageContainer,
  PaymentLine,
  PaymentLine1,
  PaymentParentContainer,
  PaymentSencondChildContainer,
  PaymentText,
  PaymentText1,
  PaymentTextContainer,
  PaymentTextContainer1,
  PaymentTitle,
  PaymentTitle1,
} from "./paymentstyle";
import { useCheckout } from "../../hooks/Payment/useCheckout";


export default function PaymentPage() {
  
  const { selectedProducts, isCheckboxChecked, handleCheckboxClick, handleNavigation, removeProductFromCart} = useCheckout();

  return (
    <PaymentParentContainer>
      <PaymentChildContainer>
        <DetailsContainer>
          <DetailsImage
            source={require("../../../../assets/categories/Details.png")}
          />
          <PaymentTitle1>Details</PaymentTitle1>
        </DetailsContainer>
        <PaymentLine></PaymentLine>
        <FlatList
          data={selectedProducts}
          keyExtractor={(item, index) =>
            item && item.id ? item.id.toString() : index.toString()
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PaymentSencondChildContainer>
              {item && (
                <>
                  <PaymentTextContainer>
                    <PaymentImageContainer>
                      <PaymentImage
                        source={require("../../../../assets/categories/check.png")}
                      />
                    </PaymentImageContainer>
                    <PaymentText> {item.attributes.name} </PaymentText>
                  </PaymentTextContainer>
                  <PaymentTextContainer1>
                    <PaymentText1>{item.attributes.customValue}x </PaymentText1>
                    <PaymentDeleteButton
                      onPress={() => removeProductFromCart(item.id)}
                    >
                      <PaymentImageContainer>
                        <PaymentImage
                          source={require("../../../../assets/categories/delete.png")}
                        />
                      </PaymentImageContainer>
                    </PaymentDeleteButton>
                  </PaymentTextContainer1>
                </>
              )}
            </PaymentSencondChildContainer>
          )}
        />
      </PaymentChildContainer>
      <PaymentLine1></PaymentLine1>
      <PaymentFooter>
        <PaymentTitle>Proceed to Payment?</PaymentTitle>
        <AgreementContainer>
          <CheckboxButton
            style={{
              backgroundColor: isCheckboxChecked
                ? "rgba(255, 213, 79, 0.7)"
                : "white",
            }}
            onPress={handleCheckboxClick}
          ></CheckboxButton>
          <AgreementText>Is that the final list you will buy?</AgreementText>
        </AgreementContainer>
        <PaymentButtonContainer>
          <PaymentButton
            disabled={!isCheckboxChecked}
            style={{
              backgroundColor: isCheckboxChecked
                ? "#FFA500"
                : "rgba(255, 213, 79, 0.7)",
            }}
            onPress={handleNavigation}
          >
            <PaymentButtonText>Proceed to Payment</PaymentButtonText>
          </PaymentButton>
        </PaymentButtonContainer>
      </PaymentFooter>
    </PaymentParentContainer>
  );
}
