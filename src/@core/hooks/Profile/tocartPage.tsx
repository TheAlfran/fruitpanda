import { useNavigation } from "@react-navigation/native";


export const topayPage = () => {

    const navigation = useNavigation<any>();

    const handleNavigationCart = async () => {
        navigation.navigate("Checkout")
    }
}