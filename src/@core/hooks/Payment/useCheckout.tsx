import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useProductContext } from "../../Screens/Cart/ProductContext";


export const useCheckout = () => {
    const { selectedProducts, removeProductFromCart } = useProductContext();
    const navigation = useNavigation();
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);

    const handleCheckboxClick = () => {
        setCheckboxChecked(!isCheckboxChecked);
    };

    const handleNavigation = async () => {
        navigation.navigate("Payment");
    };

    return {
        selectedProducts,
        isCheckboxChecked,
        handleCheckboxClick,
        handleNavigation,
        removeProductFromCart,
    };
};