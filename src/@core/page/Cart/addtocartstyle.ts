import styled from "styled-components/native";
import { background, primary, quaternary, quinary, secondary, senary, tertiary } from "../../theme/theme";
import { Platform, SectionListComponent } from "react-native";


export const CartParentContainer = styled.View`
margin-top: 10px;
width: 100%;
background-color: ${background};
`;

export const CartChildContainter = styled.View`
padding: 20px;
width: 100%;
height: 84%;


`;

export const CartSecondChildContainter = styled.View`
flex-direction: row;
border-width: 1px;
border-radius: 30px;
border-color: ${senary};
margin-top: 15px;
width: 100%;
height: 100px;
position: relative;
left: -0.2px;
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

width: 100%;
height: 13%;
background-color: white;
border-radius: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 13px;
  ${Platform.OS === 'android'
    ? `
    elevation: 4;
  `
    : `
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
  `}
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
width: 150px;
height: 40px;
margin-left: 30px;
`;

export const CartParentPaymentModalContainer = styled.View`
height: 100%;
width: 100%;
`;

export const CartChildPaymentModalContainer = styled.View`
height: 100%;
background-color: ${background};
width: 100%;
align-items: center;

`;

export const CartSecondChildPaymentModalContainer = styled.View`
height: 250px;
background-color: rgba(169, 169, 169, 0.2); /* grey with 20% opacity */
border-radius: 20px;
width: 90%;
margin-top: 20px;
align-items: center;
`;


export const OrderDetailsText = styled.Text`
font-size: 25px;
font-weight: bold;
color: black;
padding: 10px;
position: relative;
right: 18%;
`;

export const LineContainer = styled.View`
width: 90%;
height: 1px;
background-color: black;
`;

export const OrderBodyContainer = styled.View`
width: 90%;
height: 80%;
flex-direction: row;
justify-content: space-between;
margin: 10px;
`;

export const OrderBodyText = styled.Text`
font-size: 16px;
font-weight: 600;

`;

export const OrderTextContainer = styled.View`

height: 80%;
width: 40%;
padding-top: 10px;
justify-content: space-around;
`;
export const OrderTextContainer1 = styled.View`

height: 80%;
width: 40%;
padding-top: 20px;
align-items: flex-end;
justify-content: space-around;
`;



export const TotalBox = styled.View`
width: 100%;
height: 20%;
border-width: 1px;
border-radius: 20px;
position: relative;
top: 5px;
left: 10px;
align-items: center;
justify-content: center;
`;

export const CartModalFooter = styled.View`
height: 50%;
width: 100%;
`;

export const LineContainer1 = styled.View`
width: 95%;
height: 1px;
background-color: black;
position: relative;
top: 10px;
left: 10px;
`;

export const PaymentText = styled.Text`
font-size: 32px;
font-weight: 600;
padding: 20px;
`;

export const DetailsContainer = styled.View`
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
flex:1;

`;

export const CartText1 = styled.Text`
font-size: 15px;
`;

export const DetailsChildContainer = styled.View`
width: 80%;
height: 100%;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
margin-top: 5px;
`;

export const PaymentName = styled.TextInput`
width: 80%;
height: 40px;
border-width: 1px;
border-radius: 15px;
margin: 10px;

padding: 10px;
`;

export const PaymentNumber = styled.TextInput`
width: 80%;
height: 40px;
border-width: 1px;
border-radius: 15px;
margin: 10px;
padding: 10px;

`;
export const PaymentAmount = styled.TextInput`
width: 80%;
height: 40px;
border-width: 1px;
border-radius: 15px;
margin: 10px;
padding: 10px;
`;

export const WalletContainer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`;