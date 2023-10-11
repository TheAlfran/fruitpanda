import styled from "styled-components/native";
import { background, quinary, senary } from "../../theme/theme";

export const PaymentParentContainer = styled.View`
margin-top: 10px;
width: 100%;
height: 100%;
background-color: ${background};
align-items: center;
`;

export const PaymentTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

export const PaymentTitle1 = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 10px;
  
`;

export const PaymentLine = styled.View`
width: 80%;
border-width: 1px;
margin-bottom: 10px;
`;

export const PaymentChildContainer = styled.View`
  width: 95%;
  height: 60%;
  border-width: 1px;
  border-radius: 30px;
  align-items: center;
  padding-bottom: 20px; 
`;

export const PaymentSencondChildContainer = styled.View`
  flex-direction: row;
  width: 80%;
  height: 20px;
  position:relative;
  left: 160%;
 
`;


export const PaymentTextContainer = styled.View`
  width: 50%;
  height: 20px;
  flex-direction: row;
`;


export const PaymentText = styled.Text`
font-size: 15px;
font-weight: bold;
`;

export const PaymentImageContainer = styled.View`
padding-top: 2px;
`;

export const PaymentTextContainer1 = styled.View`
  width: 50%;
  height: 20px;
  flex-direction: row;
`;

export const PaymentImage = styled.Image`
width: 15px;
height: 15px;
`;

export const PaymentText1 = styled.Text`
font-size: 15px;
font-weight: bold;
`;

export const PaymentDeleteButton = styled.TouchableOpacity`
height: 20px;
`;

export const PaymentDeleteButtonText = styled.Text`
font-size: 15px;
`;

export const PaymentFooter = styled.View`
width: 90%;
height: 90px;
border-width: 1px;
border-color: black;
`;


