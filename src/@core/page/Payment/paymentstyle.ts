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

export const DetailsContainer = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const DetailsImage = styled.Image`
width: 30px;
height: 30px;
`;

export const PaymentLine1= styled.View`
  width: 80%;
  border-width: 1px;
  position: relative;
  bottom: 13px;
`;

export const PaymentChildContainer = styled.View`
  width: 95%;
  height: 60%;
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const PaymentSencondChildContainer = styled.View`
  flex-direction: row;
  width: 80%;
  height: 20px;
  position: relative;
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
  color: #565151;
`;

export const PaymentImageContainer = styled.View`
  padding-top: 2px;
`;

export const PaymentTextContainer1 = styled.View`
  width: 50%;
  height: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PaymentImage = styled.Image`
  width: 15px;
  height: 15px;
`;

export const PaymentText1 = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #565151;
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
  border-color: black;
  margin-top: 10px;
  align-items: center;

`;

export const PaymentTitel = styled.Text`
font-size: 16px;
font-weight: bold;
`;

export const PaymentButtonContainer = styled.View`
width: 100%;
height: 40px;
justify-content: center;
align-items: center;

`;

export const PaymentButton = styled.TouchableOpacity`
border-width: 1px;
border-radius: 20px;
height: 40px;
width: 80%;
justify-content: center;
align-items: center;
`;

export const AgreementContainer = styled.View`
flex-direction: row;
margin-bottom: 10px;
`;

export const AgreementText = styled.Text`
font-size: 16px;
margin-left: 10px;
color: grey;

`;

export const PaymentButtonText = styled.Text`
font-size: 16px;
`;

export const CheckboxButton = styled.TouchableOpacity`
height: 20px;
width: 20px;
border-width: 1px;


`;


