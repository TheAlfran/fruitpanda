import { FlatList, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CategoryButtons, CategoryContainer, MainContainer, MainSearch, MainTitle, MainTitleContainer, ParentCategoryContainer, ParentProductContainer, ProductButton, SaleButton, ProductContainer, ProductImage, SaleContainer, TextSale, PriceTextContainer, CategoryIamges, ViewContainer } from './mainstyle'
import axios from 'axios';

type Product = {
  id: number;
  attributes: {

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
      const response = await axios.get("http://192.168.1.11:1337/api/products?populate=image");

      return response.data.data;

    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const fetchProducts1 = async () => {
    try {
      const response = await axios.get("http://192.168.1.11:1337/api/products?filters[id][$in][1]=7&filters[id][$in][0]=1&filters[id][$in][4]=9&populate=image");
      console.log("data", response.data.data)
      return response.data.data;

    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const [products1, setProducts1] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts1()
      .then((response) => {
        setProducts1(response);
      })
      .catch((error) => {
        // Handle any errors here
      });
  }, []);

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
    { id: 1, text: 'Citrus', images: require('../../../../assets/categories/orange.png') },
    { id: 2, text: 'Berries', images: require('../../../../assets/categories/blueberry.png') },
    { id: 3, text: 'Tropical', images: require('../../../../assets/categories/banana.png') },
    { id: 4, text: 'Stone', images: require('../../../../assets/categories/cherry.png') },
    { id: 5, text: 'Exotic', images: require('../../../../assets/categories/lychee.png') },
    { id: 6, text: 'Melons', images: require('../../../../assets/categories/watermelon.png') },
    { id: 7, text: 'Apples', images: require('../../../../assets/categories/apple.png') },
    { id: 8, text: 'Grapes', images: require('../../../../assets/categories/grape.png') },
    { id: 9, text: 'T-Citrus', images: require('../../../../assets/categories/kumquat.png') },
  ];

  return (
    <MainContainer>
      <MainTitleContainer>
        <MainTitle>Explore your favorite fruits</MainTitle>
        <MainSearch placeholder='Search fruits' placeholderTextColor="#FFA726"></MainSearch>
      </MainTitleContainer>
      <ParentCategoryContainer>
        <CategoryContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item) => (
              <CategoryButtons key={item.id}>
                <CategoryButtons />
                <CategoryIamges source={item.images} />
                <Text style={{ color: "wheat" }}>{item.text}</Text>
              </CategoryButtons>
            ))}
          </ScrollView>
        </CategoryContainer>
      </ParentCategoryContainer>
      <ViewContainer>
        <SaleContainer>
          <TextSale>50% off Items</TextSale>
          <FlatList
            data={products1}
            scrollEnabled
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any, index) => {
              return item.id.toString() || index.toString();
            }}
            renderItem={({ item: { attributes }, }) => (

              <SaleButton key={attributes.id}>
                <ProductImage source={{ uri: `http://192.168.1.4:1337${attributes?.image.data[0].attributes.url}` }} />
                <Text style={{ textTransform: "uppercase" }}>{attributes.name}</Text>
                <PriceTextContainer>
                  <Text style={{ textDecorationLine: 'line-through' }}>₱{attributes.price}</Text>
                  <Text> / ₱{attributes.price * 0.5}</Text>
                </PriceTextContainer>
              </SaleButton>
            )}
          />
        </SaleContainer>
        <ProductContainer>
          <FlatList
            data={products}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any, index) => {
              return item.id.toString() || index.toString()
            }}
            numColumns={2}
            key={'_'}
            renderItem={({ item: { attributes }, }) => {
              return <>
                <ParentProductContainer>
                  <ProductButton key={attributes.id}>
                    <ProductImage source={{ uri: `http://192.168.1.4:1337${attributes?.image.data[0].attributes.url}` }} />
                    <Text style={{ textTransform: "uppercase" }}>{attributes.name}</Text>
                    <Text>₱{attributes.price}</Text>
                  </ProductButton>
                </ParentProductContainer>
              </>
            }
            }
          />
        </ProductContainer>
      </ViewContainer>
    </MainContainer>
  );
}

