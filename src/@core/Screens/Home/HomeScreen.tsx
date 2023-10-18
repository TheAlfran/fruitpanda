import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  FooterButton,
  FooterContainer,
  FooterContainer2,
  FooterText,
  FooterTextButton,
  ParentContainer,
  SlideImage,
  SlideText,
  StartButton,
  StartButtonContainer,
  StartButtonText,
  SwiperContainer,
  Title,
  TitleContainer,
} from "./homestyle";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  const images = [
    require("../../../../assets/fruits.png"), // Adjust the path as needed
    require("../../../../assets/order.png"), // Adjust the path as needed
    require("../../../../assets/deliver.png"), // Adjust the path as needed
  ];

  const description = [
    "Pick and Choose Fresh Fruits",
    "Order and Make Payments",
    "Wait for the delivery",
  ];

  return (
    <ParentContainer>
      <TitleContainer>
        <Title>FRUIT PANDA</Title>
      </TitleContainer>
      <SwiperContainer>
        <Swiper
          loop={true}
          showsButtons={true}
          showsPagination={true}
          autoplay={true}
        >
          {images.map((image, index) => (
            <View key={index}>
              <SlideImage source={image} resizeMode="center" />
              <SlideText>{description[index]}</SlideText>
            </View>
          ))}
        </Swiper>
      </SwiperContainer>
      <StartButtonContainer>
        <StartButton onPress={handleLoginPress}>
          <StartButtonText>Get Started!</StartButtonText>
        </StartButton>
      </StartButtonContainer>
      <FooterContainer>
        <FooterText>by clicking continue you will agree on</FooterText>
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
    </ParentContainer>
  );
}
