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

export const CartParentContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  background-color: ${background};
  align-items: center;
`;

export const CartChildContainter = styled.View`
  padding: 20px;
  width: 95%;
  height: 84%;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-top: 5px;
`;


export const CartSecondChildContainter = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${senary};
  margin-top: 15px;
  width: 100%;
  height: 100px;
  position: relative;
  left: -0.1px;
`;

export const CartTextContainer = styled.View`
  width: 50%;
  height: 40px;
  justify-content: center;
  text-align: center;
  border-color: black;
  margin: 25px;
  position: relative;
  right: 28px;
`;

export const CartText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const CartImageAddContainer = styled.View`
  width: 30%;
  height: 75px;
  background-color: ${quinary};
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  margin: 10px;
`;

export const CartImageAdd = styled.Image`
  width: 50px;
  height: 50px;
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
border-radius: 25px;
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






