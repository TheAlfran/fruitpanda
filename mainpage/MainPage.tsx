import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { CategoryButtons, CategoryContainer, MainContainer, MainSearch, MainTitle, MainTitleContainer, ParentCategoryContainer } from './mainstyle'




export default function MainPage() {

  const items = [
    { id: 1, text: 'Citrus' },
    { id: 2, text: 'Berries' },
    { id: 3, text: 'Tropical' },
    { id: 4, text: 'Stone' },
    { id: 5, text: 'Exotic' },
    { id: 6, text: 'Melons' },
    { id: 7, text: 'Apples' },
    { id: 8, text: 'Grapes' },
    { id: 9, text: 'T-Citrus' },
    // Add more items as needed
  ];
  
  return (
    <MainContainer>
      <MainTitleContainer>
        <MainTitle>Explore you favorite fruits</MainTitle>
        <MainSearch placeholder='Search fruits' placeholderTextColor="wheat"></MainSearch>
      </MainTitleContainer>
      <ParentCategoryContainer>
        <CategoryContainer>
            <ScrollView horizontal>
            {items.map((item) => (
              <CategoryButtons key={item.id}>
                <Text style={{color: "wheat"}}>{item.text}</Text>
              </CategoryButtons>
            ))}
          </ScrollView>
        </CategoryContainer>
      </ParentCategoryContainer>
    </MainContainer>
  );
}