import { View, Text, FlatList, TouchableOpacity  } from "react-native";
import React, { useState } from "react";
import {
  PaymentChildContainer,
  PaymentDeleteButton,
  PaymentDeleteButtonText,
  PaymentFooter,
  PaymentImage,
  PaymentImageContainer,
  PaymentLine,
  PaymentParentContainer,
  PaymentSencondChildContainer,
  PaymentText,
  PaymentText1,
  PaymentTextContainer,
  PaymentTextContainer1,
  PaymentTitle,
  PaymentTitle1,
} from "./paymentstyle";
import { useProductContext,  } from "../Cart/ProductContext";

export default function PaymentPage() {
  const { selectedProducts, removeProductFromCart  } = useProductContext();



  return (
    <PaymentParentContainer>
      <PaymentTitle>Checkout</PaymentTitle>
      <PaymentChildContainer>
        <PaymentTitle1>Details</PaymentTitle1>
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
                    <PaymentText1>{item.attributes.customValue}x   </PaymentText1>
                    <PaymentDeleteButton onPress={() => removeProductFromCart(item.id)}>
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
      <PaymentFooter>
        
      </PaymentFooter>
    </PaymentParentContainer>
  );
}
