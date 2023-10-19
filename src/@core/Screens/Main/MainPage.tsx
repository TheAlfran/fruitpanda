import { FlatList, Text, ScrollView, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import {
  CategoryButtons,
  CategoryContainer,
  MainContainer,
  MainSearch,
  MainTitle,
  MainTitleContainer,
  ParentCategoryContainer,
  ParentProductContainer,
  ProductButton,
  SaleButton,
  ProductContainer,
  ProductImage,
  SaleContainer,
  TextSale,
  PriceTextContainer,
  CategoryIamges,
  ParentModalContainer,
  ChildModalContainer,
  CloseButtonModal,
  CartButton,
  CartText,
  CartImage,
  CartImageContainer,
  ModalTitle,
  ModalTitleContainer,
  PriceDescriptionTextContainer,
  AllTextColors,
  ProductImageContainer,
  ModalTitleContainer1,
  ModalTitleContainer2,
  ModalPrice,
  FruitDescription,
  LineContainer,
  AddContainer,
  CartAdd,
  CartMinus,
  CartInfo,
  CartText1,
  SecondChildContainer,
  QuantityText,
  QuantityTextContainer,
  CartText2,
} from "./mainstyle";
import { useProductFilter } from "../../hooks/Mainpage/searchProduct";
import category from "../../hooks/Mainpage/categoryData";
import { useProductActions } from "../../hooks/Mainpage/modalActions";
import { useProductData } from "../../hooks/Mainpage/fetchProducts";
import { BASE_URL } from "../../hooks/Global/baseURL";
const baseUrl = `${BASE_URL}`;

export default function MainPage() {
  const { products, products1 } = useProductData();
  const { searchQuery, setSearchQuery, filteredProducts } =
    useProductFilter(products);
  const {
    selectedProduct,
    isModalVisible,
    inputValue,
    handleButtonClick,
    closeModal,
    handleButtonClick1,
    setInputValue,
    decrementValue,
    incrementValue,
  } = useProductActions();

  const FiveStarRating = () => {
    const maxStars = 5;
    const rating = 5;

    const starIcons = Array.from({ length: maxStars }, (_, index) => (
      <Text key={index} style={{color: "yellow", fontSize: 20}}>&#9733;</Text> // Wrap the star character in a Text component
    ));

    return (
      <>
        <Text>{starIcons}</Text>
        <Text>
          Rating: {rating} / {maxStars}
        </Text>
      </>
    );
  };

  return (
    <MainContainer>
      <MainTitleContainer>
        <MainTitle>Explore your favorite fruits</MainTitle>
        <MainSearch
          placeholder="Search fruits"
          placeholderTextColor="#FFA726"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        ></MainSearch>
      </MainTitleContainer>
      <ParentCategoryContainer>
        <CategoryContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category.map((item) => (
              <CategoryButtons key={item.id}>
                <CategoryButtons />
                <CategoryIamges source={item.images} />
                <Text style={{ color: "wheat" }}>{item.text}</Text>
              </CategoryButtons>
            ))}
          </ScrollView>
        </CategoryContainer>
      </ParentCategoryContainer>
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
          renderItem={({ item: { attributes } }) => (
            <SaleButton key={attributes.id}>
              <ProductImage
                source={{
                  uri: `${baseUrl}${attributes?.image?.data.attributes?.url}`,
                }}
              />
              <AllTextColors style={{ textTransform: "uppercase" }}>
                {attributes.name}
              </AllTextColors>
              <PriceTextContainer>
                <AllTextColors style={{ textDecorationLine: "line-through" }}>
                  ₱{attributes.price}
                </AllTextColors>
                <AllTextColors> / ₱{attributes.price * 0.5}</AllTextColors>
              </PriceTextContainer>
            </SaleButton>
          )}
        />
      </SaleContainer>
      <ProductContainer>
        <FlatList
          data={filteredProducts.length > 0 ? filteredProducts : products}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index) => {
            return item.id.toString() || index.toString();
          }}
          numColumns={2}
          key={"_"}
          renderItem={({ item: { attributes } }) => {
            console.log("HERE", attributes.image.data.attributes.url);
            return (
              <>
                <ParentProductContainer>
                  <ProductButton
                    key={attributes.id}
                    onPress={() =>
                      handleButtonClick({
                        id: attributes.id,
                        attributes: attributes,
                      })
                    }
                  >
                    <ProductImageContainer>
                      <ProductImage
                        source={{
                          uri: `${baseUrl}${attributes.image.data.attributes.url}`,
                        }}
                      />
                    </ProductImageContainer>
                    <AllTextColors style={{ textTransform: "uppercase" }}>
                      {attributes.name}
                    </AllTextColors>
                    <AllTextColors>₱{attributes.price}</AllTextColors>
                  </ProductButton>
                </ParentProductContainer>
              </>
            );
          }}
        />
      </ProductContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        {selectedProduct && (
          <ParentModalContainer>
            <ChildModalContainer>
              <CloseButtonModal onPress={closeModal}>
                <CartText2>Close</CartText2>
              </CloseButtonModal>
              <CartImageContainer>
                <CartImage
                  source={{
                    uri: `${baseUrl}${
                      selectedProduct.attributes.image?.data?.attributes?.url ||
                      ""
                    }`,
                  }}
                />
              </CartImageContainer>
              <SecondChildContainer>
                <ModalTitleContainer1>
                  <ModalTitleContainer>
                    <ModalTitle>{selectedProduct?.attributes.name}</ModalTitle>
                    <FiveStarRating />
                  </ModalTitleContainer>
                  <ModalTitleContainer2>
                    <ModalPrice>
                      from ₱{selectedProduct?.attributes.price}
                    </ModalPrice>
                  </ModalTitleContainer2>
                </ModalTitleContainer1>
                <PriceDescriptionTextContainer>
                  <FruitDescription>
                    For reference only:{" "}
                    {selectedProduct?.attributes.description}.
                  </FruitDescription>
                </PriceDescriptionTextContainer>
                <LineContainer></LineContainer>
                <QuantityTextContainer>
                  <QuantityText> Quantity </QuantityText>
                </QuantityTextContainer>
                <AddContainer>
                  <CartMinus onPress={decrementValue}>
                    <CartText1>-</CartText1>
                  </CartMinus>
                  <CartInfo
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="0"
                    keyboardType="numeric"
                    keyboardAppearance="light"
                  ></CartInfo>
                  <CartAdd onPress={incrementValue}>
                    <CartText1>+</CartText1>
                  </CartAdd>
                  <CartButton
                    onPress={() => {
                      console.log("awts", selectedProduct);
                      return handleButtonClick1(selectedProduct);
                    }}
                  >
                    <CartText>Add to Cart!</CartText>
                  </CartButton>
                </AddContainer>
              </SecondChildContainer>
            </ChildModalContainer>
          </ParentModalContainer>
        )}
      </Modal>
    </MainContainer>
  );
}
