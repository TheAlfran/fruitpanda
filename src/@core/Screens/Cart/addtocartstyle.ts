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

export const CartParentContainer = styled.View`

  width: 100%;
  background-color: ${background};
  align-items: center;
`;

export const CartChildContainter = styled.View`
  padding: 20px;
  width: 95%;
  height: 84%;
  border-radius: 10px;
  margin-top: 5px;
  
`;


export const CartSecondChildContainter = styled.View`
  flex-direction: row;
  border-radius: 10px;
  background-color: ${background};
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
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
      elevation: 3;
    `,
  })}
`;

export const CartTextContainer = styled.View`
  width: 20%;
  justify-content: center;
  text-align: center;
  border-color: black;
`;

export const CartText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const CartImageAddContainer = styled.View`
  width: 30%;
  height: 75px;
  background-color: ${quinary};
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  margin: 10px;
`;

export const CartImageAdd = styled.Image`
  width: 50px;
  height: 50px;
`;


export const CombineContainer = styled.View`
margin-left: 25px;
justify-content: flex-end;
`;


export const QuantityAddContainer = styled.View`
flex-direction:row;
margin-bottom: 10px;
`;

export const AddQuantity = styled.TouchableOpacity`
border-radius: 5px;
padding-left: 15px;
padding-right: 15px;
background-color: ${background};
justify-content: center;
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
      elevation: 2;
    `,
  })}
`;

export const AddQuantityText = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${secondary};
`;

export const TextQuantity = styled.TextInput`
padding-left: 3px;
padding-right: 3px;
text-align: center;
`;

export const ReduceQuantityText = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${secondary};


`;

export const ReduceQuantity = styled.TouchableOpacity`
border-radius: 5px;
padding-left: 15px;
padding-right: 15px;
justify-content: center;
background-color: ${background};
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
      elevation: 2;
    `,
  })}
`;

export const CartFooterContainer = styled.View`
  width: 95%;
  height: 13%;
  background-color: #f8f8f8;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
`;

export const CartFooterText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  padding: 20px;
  margin-right: 25px;
`;

export const CartFooterButtonText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #fff;
`;

export const CartFooterButton = styled.TouchableOpacity`
border-width: 1px;
border-color: ${secondary};
border-radius: 5px;
background-color: ${secondary};
width: 50%;
height: 40px;
margin-left: 30px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const CartModalFooter = styled.View`
  height: 50%;
  width: 90%;
`;

export const CartFooterImage = styled.Image`
width: 25px;
height: 25px;
margin-right: 10px;
`;






