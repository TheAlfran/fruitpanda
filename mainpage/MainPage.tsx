import { View, Text } from 'react-native'
import React from 'react'
import { MainContainer, MainSearch, MainTitle, MainTitleContainer } from './mainstyle'




export default function MainPage() {
  return (
    <MainContainer>
      <MainTitleContainer>
        <MainTitle>Explore you favorite fruits</MainTitle>
        <MainSearch placeholder='Search fruits' placeholderTextColor="wheat"></MainSearch>
      </MainTitleContainer>
    </MainContainer>
  );
}