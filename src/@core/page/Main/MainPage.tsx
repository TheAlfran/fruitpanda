import {
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
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
  ViewContainer,
  ParentModalContainer,
  ChildModalContainer,
  CloseButtonModal,
  ButtonModalText,
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
  CustomValueContainer,
  LineContainer,
  CustomValueInput,
  CustomChildValueContainer,
  CustomValueTitle,
  CustomValueTitle2,
  AddContainer,
  CartAdd,
  CartMinus,
  CartInfo,
  CartText1,
} from "./mainstyle";
import axios from "axios";
import { useProductContext } from "../Cart/ProductContext";

export type Product = {
  id: number;
  attributes: {
    name: string;
    quantity: number;
    price: number;
    category: string;
    description: string;
    customValue?: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectCategory, setSelectedCategory] = useState<Product[]>([]);

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [searchQuery]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.77:1337/api/products?populate=image"
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  const fetchProducts1 = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.77:1337/api/products?filters[id][$in][1]=1&populate=image"
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
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
    {
      id: 1,
      text: "Citrus",
      images: require("../../../../assets/categories/orange.png"),
    },
    {
      id: 2,
      text: "Berries",
      images: require("../../../../assets/categories/blueberry.png"),
    },
    {
      id: 3,
      text: "Tropical",
      images: require("../../../../assets/categories/banana.png"),
    },
    {
      id: 4,
      text: "Stone",
      images: require("../../../../assets/categories/cherry.png"),
    },
    {
      id: 5,
      text: "Exotic",
      images: require("../../../../assets/categories/lychee.png"),
    },
    {
      id: 6,
      text: "Melons",
      images: require("../../../../assets/categories/watermelon.png"),
    },
    {
      id: 7,
      text: "Apples",
      images: require("../../../../assets/categories/apple.png"),
    },
    {
      id: 8,
      text: "Grapes",
      images: require("../../../../assets/categories/grape.png"),
    },
    {
      id: 9,
      text: "T-Citrus",
      images: require("../../../../assets/categories/kumquat.png"),
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Add this state variable
  const [isModalVisible, setModalVisible] = useState(false);
  const handleButtonClick = (productmodal: Product) => {
    setSelectedProduct(productmodal);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setInputValue("");
  };

  const { addProductToCart } = useProductContext() || {}; // Use the context directly

  const handleButtonClick1 = (productmodal: Product) => {
    const customValue = parseInt(inputValue, 10);

    if (customValue > productmodal.attributes.quantity) {
      Alert.alert("Error", "The amount exceeded the quantity available");
      return;
    } else if (customValue === 0) {
      Alert.alert("Error", "The amount is not valid");
      return;
    }

    addProductToCart &&
      addProductToCart({
        ...productmodal,
        attributes: {
          ...productmodal.attributes,
          customValue,
        },
      });

    Alert.alert("Success", "Item added to cart!");
    setModalVisible(true);
  };

  const [inputValue, setInputValue] = useState("");

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
                  uri: `http://192.168.1.77:1337${attributes?.image?.data.attributes?.url}`,
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
                          uri: `http://192.168.1.77:1337${attributes.image.data.attributes.url}`,
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
              <CartImageContainer>
                <CartImage
                  source={{
                    uri: `http://192.168.1.77:1337${
                      selectedProduct.attributes.image?.data?.attributes?.url ||
                      ""
                    }`,
                  }}
                />
              </CartImageContainer>
              <ModalTitleContainer1>
                <ModalTitleContainer>
                  <ModalTitle>{selectedProduct?.attributes.name}</ModalTitle>
                </ModalTitleContainer>
                <ModalTitleContainer2>
                  <ModalPrice>
                    from ₱{selectedProduct?.attributes.price}
                  </ModalPrice>
                </ModalTitleContainer2>
              </ModalTitleContainer1>
              <PriceDescriptionTextContainer>
                <FruitDescription>
                  For reference only: {selectedProduct?.attributes.description}.
                </FruitDescription>
              </PriceDescriptionTextContainer>
              <LineContainer></LineContainer>
              <CustomValueContainer>
                <CustomChildValueContainer>
                  <CustomValueTitle>Quantity</CustomValueTitle>
                </CustomChildValueContainer>
                <CustomValueTitle2>Enter a value</CustomValueTitle2>
                <CustomValueInput
                  value={inputValue}
                  onChangeText={setInputValue}
                  placeholder="0"
                  keyboardType="numeric"
                ></CustomValueInput>
              </CustomValueContainer>
              <CloseButtonModal onPress={closeModal}>
                <CartText>Close</CartText>
              </CloseButtonModal>

              <AddContainer>
                <CartAdd>
                  <CartText1>+</CartText1>
                </CartAdd>
                <CartInfo placeholder="0"></CartInfo>
                <CartMinus>
                  <CartText1>-</CartText1>
                </CartMinus>
                <CartButton
                  onPress={() => {
                    console.log("awts", selectedProduct);
                    return handleButtonClick1(selectedProduct);
                  }}
                >
                  <CartText>Add to Cart!</CartText>
                </CartButton>
              </AddContainer>
            </ChildModalContainer>
          </ParentModalContainer>
        )}
      </Modal>
    </MainContainer>
  );
}
