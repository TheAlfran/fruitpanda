import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useProductContext } from "../../Screens/Cart/ProductContext";
import { BASE_URL } from "../Global/baseURL";
import axios from "axios";
const baseUrl = `${BASE_URL}`;

export const usePayment = () => {
  const { selectedProducts, clearCart } = useProductContext();
  const totalPrice = selectedProducts.reduce(
    (total, product) =>
      total + product.attributes.price * (product.attributes.customValue || 0),
    0
  );
  const navigation = useNavigation();
  const totalPriceWithVAT = totalPrice * 0.12;
  const deliveryFee = 20;

  const [isModalVisible, setModalVisible] = useState(false);

  const handleNavigation = async () => {
    navigation.navigate("Navigate");
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const overallTotal = totalPrice + deliveryFee + totalPriceWithVAT;
  const quantityValue = selectedProducts.map(
    (product) => product.attributes.customValue || 0
  );

  const priceProduct = selectedProducts.map(
    (product) => product.attributes.price || 0
  );

  const nameProduct = selectedProducts.map(
    (product) => product.attributes.name
  );

  const [userInput, setUserInput] = useState(0);

  const handlePayment = () => {
    if (userInput > overallTotal) {
      // Prepare the data to be sent
      const receiptData = selectedProducts.map((product) => ({
        name: product.attributes.name,
        price: product.attributes.price,
        quantity: product.attributes.customValue || 0,
        subtotal: product.attributes.price * (product.attributes.customValue || 0),
        vat: product.attributes.price * 0.12,
        alltotal: product.attributes.price * (product.attributes.customValue || 0) + 20 + product.attributes.price * 0.12,
        payment: userInput,
      }));

      // Make a POST request to the Strapi API
      axios
        .post(`${baseUrl}/api/receipt2s`, {
          data: {
            Receipt: receiptData, // Add all the receipt data to the Receipt component
          },
        })
        .then((response) => {
          console.log("Success:", response.data.data);
          alert("Payment done");
          clearCart(); // Clear the cart
          setUserInput(0);
        })
        .catch((error) => {
          console.error("Error:", error);
          console.error("Error Details:", error.response.data);
          alert("Payment rejected");
        });
      handleNavigation();
    } else {
      alert("Payment rejected");
    }
  };

  return {
    selectedProducts,
    totalPrice,
    deliveryFee,
    totalPriceWithVAT,
    isModalVisible,
    openModal,
    closeModal,
    userInput,
    setUserInput,
    handlePayment,
    overallTotal,
  };
};
