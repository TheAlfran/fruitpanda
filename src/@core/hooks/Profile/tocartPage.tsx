import { useNavigation } from "@react-navigation/native";


export const topayPage = () => {

    const navigation = useNavigation();

    const handleNavigationCart = async () => {
        navigation.navigate("Checkout")
    }
}