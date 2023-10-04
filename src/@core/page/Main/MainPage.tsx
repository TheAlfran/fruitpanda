import { FlatList, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CategoryButtons, CategoryContainer, MainContainer, MainSearch, MainTitle, MainTitleContainer, ParentCategoryContainer, ProductButton, ProductContainer } from './mainstyle'
import axios from 'axios';

type Product = {
  attributes: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
    description: string;
  }
};

export default function MainPage() {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://192.168.1.4:1337/api/products");
      console.log("API Response:", response.data.data); // Add this line to check the response
      return response.data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };


  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        // Handle any errors here
      });
  }, []);

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
        <MainTitle>Explore your favorite fruits</MainTitle>
        <MainSearch placeholder='Search fruits' placeholderTextColor="wheat"></MainSearch>
      </MainTitleContainer>
      <ParentCategoryContainer>
        <CategoryContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item) => (
              <CategoryButtons key={item.id}>
                <Text style={{ color: "wheat" }}>{item.text}</Text>
              </CategoryButtons>
            ))}
          </ScrollView>
        </CategoryContainer>
      </ParentCategoryContainer>
      <ProductContainer>
        <FlatList
          data={products}
          keyExtractor={(item: any, index) => {
            return item.id.toString() || index.toString()
          }}
          renderItem={({ item: { attributes } }) => {
            console.log("nara dari", attributes);
            return <ProductButton key={attributes.id}>
              <Text>Name: {attributes.name}</Text>
              <Text>Quantity: {attributes.quantity}</Text>
              <Text>Price: {attributes.price}</Text>
              <Text>Category: {attributes.category}</Text>
            </ProductButton>
          }
          }
        />
      </ProductContainer>
    </MainContainer>
  );
}

