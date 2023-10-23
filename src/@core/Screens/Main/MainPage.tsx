import {
  FlatList,
  Text,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  CategoryButtons,
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
  TextCategory,
  CategoryContainer1,
  TitleCategoryContainer,
  TitleCategory,
  ProductButtonContainer,
  ProductButtonText,
} from "./mainstyle";
import {  useProductFilter } from "../../hooks/Mainpage/searchProduct";
import category from "../../hooks/Mainpage/categoryData";
import { useProductActions } from "../../hooks/Mainpage/modalActions";
import { useProductData } from "../../hooks/Mainpage/fetchProducts";
import { API_URL, BASE_URL } from "../../hooks/Global/baseURL";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import ratingHook from "../../hooks/Mainpage/ratingHook";
const baseUrl = `${BASE_URL}`;
const apiUrl = `${API_URL}`;
import SkeletonContent from 'react-native-skeleton-content';

export default function MainPage() {
  const { products, isLoading } = useProductData();
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

  const { FiveStarRating, FiveStarRating1 } = ratingHook();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleButtonClick2 = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
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
      <TitleCategoryContainer>
        <TitleCategory>Categories</TitleCategory>
      </TitleCategoryContainer>
      <ParentCategoryContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {category.map((item) => (
            <CategoryContainer1 key={item.id}>
              <CategoryButtons
                onPress={() => handleButtonClick2(item.text)}
                style={{
                  backgroundColor:
                    selectedCategory === item.text ? "#D70F64" : "white",
                }}
              >
                <CategoryIamges source={item.images} />
              </CategoryButtons>
              <TextCategory>{item.text}</TextCategory>
            </CategoryContainer1>
          ))}
        </ScrollView>
      </ParentCategoryContainer>
      <TitleCategoryContainer>
        <TitleCategory>Popular</TitleCategory>
      </TitleCategoryContainer>

      <ProductContainer>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={
              selectedCategory
                ? filteredProducts.length > 0
                  ? filteredProducts.filter(
                      (product) =>
                        product.attributes.category === selectedCategory
                    )
                  : products.filter(
                      (product) =>
                        product.attributes.category === selectedCategory
                    )
                : filteredProducts.length > 0
                ? filteredProducts
                : products
            }
            scrollEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any, index) => {
              return item && item.uid ? item.uid : index.toString();
            }}
            numColumns={2}
            key={"_"}
            renderItem={({ item: { id, attributes } }) => {
              console.log("HERE", attributes.image.data.attributes.url);
              return (
                <>
                  <ParentProductContainer>
                    <ProductButtonContainer>
                      <PriceTextContainer>
                        <AllTextColors
                          style={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                          }}
                        >
                          {attributes.name}
                        </AllTextColors>
                        <AllTextColors>₱{attributes.price}</AllTextColors>
                        <FiveStarRating1 />
                      </PriceTextContainer>
                      <ProductImage
                        source={{
                          uri: `${baseUrl}${attributes.image.data.attributes.url}`,
                        }}
                      />
                      <ProductButton
                        key={id}
                        onPress={() =>
                          handleButtonClick({
                            id: id,
                            attributes: attributes,
                          })
                        }
                      >
                        <FontAwesome5Icon
                          name="shopping-cart"
                          size={15}
                          color="#fff"
                        />
                        <ProductButtonText> Add to Cart</ProductButtonText>
                      </ProductButton>
                    </ProductButtonContainer>
                  </ParentProductContainer>
                </>
              );
            }}
          />
        )}
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
