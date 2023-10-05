import { FlatList, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CategoryButtons, CategoryContainer, MainContainer, MainSearch, MainTitle, MainTitleContainer, ParentCategoryContainer, ProductButton, ProductContainer, ProductImage } from './mainstyle'
import axios from 'axios';

type Product = {
  attributes: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        }
      }
    }

  };
};


export default function MainPage() {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://192.168.1.4:1337/api/products?populate=image");
      console.log("API Response:", response.data.data); // Add this line to check the response
      console.log(response.data.data.producst)
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
          scrollEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index) => {
            return item.id.toString() || index.toString()
          }}
          numColumns={2}
          renderItem={({ item: { attributes } }) => (
            <>
              <View style={{ flex: 1 }}>
                <ProductButton key={attributes.id}>
                  <ProductImage source={{ uri: `http://192.168.1.4:1337${attributes?.image.data[0].attributes.url}` }} />
                  <Text>Name: {attributes.name}</Text>
                </ProductButton>
              </View>
            </>
          )
          }
        />
      </ProductContainer>
    </MainContainer>
  );
}

