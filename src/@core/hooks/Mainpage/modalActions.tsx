import { Product } from "../Global/productList";
import { useState } from "react";
import { Alert } from "react-native";
import { useProductContext } from "../../Screens/Cart/ProductContext";

export const useProductActions = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addProductToCart } = useProductContext() || {};
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (productmodal: Product) => {
    setSelectedProduct(productmodal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setInputValue("");
  };

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

  return {
    selectedProduct,
    isModalVisible,
    inputValue,
    handleButtonClick,
    closeModal,
    handleButtonClick1,
    setInputValue,
  };
};
