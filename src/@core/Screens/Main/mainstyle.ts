import styled from "styled-components/native";
import {
  background,
  primary,
  quaternary,
  quinary,
  secondary,
  senary,
  tertiary,
} from "../../theme/theme";
import { Platform } from "react-native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MainTitleContainer = styled.View`
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${tertiary};
  padding: 30px;
  top: 20px;
`;

export const MainSearch = styled.TextInput`
  border-width: 1px;
  border-color: ${secondary};
  border-radius: 9px;
  height: 40px;
  width: 90%;
  margin-bottom: 30px;
  padding: 5px;
  padding-left: 10px;
  background-color: #fff;
`;

export const ParentCategoryContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 15px;
  border-bottom-right-radius: 19px;
  border-bottom-left-radius: 19px;
  background-color: ${secondary};
`;

export const CategoryContainer = styled.View`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${secondary};
`;

export const CategoryButtons = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${secondary};
  border-bottom-color: ${secondary};
  border-top-color: ${secondary};
  border-left-color: ${secondary};
  height: 30px;
  width: 80px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -8px;
`;

export const CategoryIamges = styled.Image`
  width: 30px;
  height: 30px;
`;

export const AllTextColors = styled.Text`
  color: ${senary};
`;

export const SaleContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  flex: 1;
  background-color: ${tertiary};
  position: relative;
  top: -10px;
  border-radius: 20px;
`;

export const TextSale = styled.Text`
  font-size: 35px;
  font-weight: bold;
  margin: 10px;
`;

export const SaleButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${secondary};
  border-radius: 20px;
  width: 150px;
  height: 80%;
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const PriceTextContainer = styled.View`
  flex-direction: row;
`;

export const ParentProductContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ProductContainer = styled.View`
  background-color: #fff;
  flex: 1;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ProductButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${secondary};
  border-radius: 10px;
  width: 90%;
  height: 150px;
  margin-top: 10px;
  position: relative;
  left: 8px;
  justify-content: center;
  align-items: center;
`;

export const ProductImageContainer = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #f279ac;
  margin-top: -10px;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ProductImage = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 3px;
`;

export const ViewContainer = styled.View`
  background-color: transparent;
  flex: 1;
`;

export const ParentModalContainer = styled.View`
  height: 100%;
  width: 100%;
 

`;

export const ChildModalContainer = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const SecondChildContainer = styled.View`
width: 90%;
align-items: center;
border-radius: 10px;
margin-top: 30px;
background-color: #fff;
${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: {
        width: 0,
        height: 2,
      }
      shadow-opacity: 0.25;
      shadow-radius: 3.84;
    `,
    android: `
      elevation: 5;
    `,
  })}

`;

export const ModalTitleContainer1 = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: auto;
`;

export const ModalTitleContainer = styled.View`
  padding: 20px;
  height: auto;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ModalPrice = styled.Text`
  font-weight: bold;
`;

export const ModalTitleContainer2 = styled.View`
  height: auto;
  padding: 25px;
`;

export const FruitDescription = styled.Text`
  font-size: 12px;
  color: grey;
`;

export const CartImageContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const CartImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ImageB = styled.Image`
  width: 40px;
  height: 40px;
`;


export const LineContainer = styled.View`
  width: 90%;
  border-width: 0.3px;
  border-color: grey;
  margin-top: 10px;
  margin-bottom: 20px;
`;


export const CloseButtonModal = styled.TouchableOpacity`
  border-color: black;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
  position:absolute;
  right: 77%;
  top: 20px;

  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: {
        width: 0,
        height: 2,
      }
      shadow-opacity: 0.25;
      shadow-radius: 3.84;
    `,
    android: `
      elevation: 5;
    `,
  })};

`;

export const PriceDescriptionTextContainer = styled.View`
  height: auto;
  width: 90%;
`;

export const AddContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  
`;

export const CartAdd = styled.TouchableOpacity`
  background-color: ${quinary};
  padding-top: 2px;
  padding-bottom:2px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

`;

export const CartMinus = styled.TouchableOpacity`
  background-color: ${quinary};
  padding-top: 2px;
  padding-bottom:2px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const CartText1 = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: justify;
  font-size: 16px;
`;

export const CartInfo = styled.TextInput`
  padding: 5px;
  height: 50px;
  text-align: center;
`;

export const CartButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${quinary};
  border-radius: 25px;
  background-color: ${quinary};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 45px;
`;

export const QuantityTextContainer = styled.Text`
width: 90%;
top: 10px;
`;

export const QuantityText = styled.Text`
font-size: 24px;
font-weight: bold;
`;

export const CartText = styled.Text`
  color: ${background};
  font-weight: bold;
  text-align: justify;
`;

export const CartText2 = styled.Text`
  color: ${secondary};
  font-weight: bold;
  text-align: justify;
`;

export const ButtonModalText = styled.Text`
  color: ${senary};
  font-size: 20px;
`;
