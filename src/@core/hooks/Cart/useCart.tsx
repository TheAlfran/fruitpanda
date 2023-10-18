import { useNavigation } from "@react-navigation/native";
import { useProductContext } from "../../Screens/Cart/ProductContext";

export const useCart = () => {
  const { selectedProducts } = useProductContext();
  const navigation = useNavigation<any>();
  const totalPrice = selectedProducts.reduce(
    (total, product) =>
      total + product.attributes.price * (product.attributes.customValue || 0),
    0
  );

  const checkoutClicked = async () => {
    navigation.navigate("Checkout");
  };

  return {
    selectedProducts,
    totalPrice,
    checkoutClicked,
  };
};
