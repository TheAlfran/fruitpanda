import styled from "styled-components/native";
import { background, primary, quinary, secondary } from "../../theme/theme";

export const PayContainer = styled.View`
  align-items: center;
`;

export const PayChildContainer = styled.View`
  height: 220px;
  width: 95%;
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  margin: 8%;
  align-items: center;
`;

export const PaySecondChildContainer = styled.View`
  width: 95%;
  height: 15%;
  margin-top: 10px;
  flex-direction: row;
  border-width: 1px;
  flex: 1;
`;

export const PaySummaryImage = styled.Image`
  width: 29px;
  height: 29px;
  margin-left: 7px;
`;

export const PaySecondTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const PayThirdContainer = styled.View`
  width: 95%;
  height: 75%;
  border-radius: 5px;
  align-items: center;
`;

export const PayContainerSub = styled.View`
  flex-direction: row;
  height: auto;
`;

export const PayContainer1 = styled.View`
  width: 50%;
  height: 90%;
  padding-left: 5px;
`;

export const PayContainer2 = styled.View`
  width: 50%;
  height: 90%;
  padding-right: 5px;
`;

export const PayLineContainer = styled.View`
  width: 100%;
  border-width: 1px;
  position: relative;
  bottom: 15%;
`;

export const PayText1 = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;

export const PayText2 = styled.Text`
  font-size: 16px;
  font-weight: 800;
  text-align: right;
`;

export const PayFourthContainer = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: 3%;
`;

export const PayContainer3 = styled.View`
  width: 48%;
  height: 76%;
`;

export const PayContainer4 = styled.View`
  width: 48%;
  height: 76%;
`;

export const PayText3 = styled.Text`
  font-size: 13px;
  font-weight: 500;
  margin: 3%;
  position: relative;
  top: 5%;
`;

export const PayText4 = styled.Text`
  font-size: 13px;
  font-weight: 600;
  margin: 3%;
  text-align: right;
  position: relative;
  top: 5%;
`;

export const PayText5 = styled.Text`
  font-size: 17px;
  font-weight: 600;
  bottom: -30%;
`;

export const PayText6 = styled.Text`
  font-size: 17px;
  font-weight: 600;
  text-align: right;
  bottom: -30%;
`;

export const PaySixthContainer = styled.View`
  width: 95%;
  height: 35%;

  border-radius: 5px;
  align-items: center;
`;

export const PayFooterTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;


export const PaymentInfoContainer = styled.View`
width: 100%;
align-items: center;
padding: 20px;
margin-top: 3px;
background-color: ${background};
`;

export const PaymentAddressContainer = styled.View`
width: 100%;
flex-direction: row;
align-items: center;

`;

export const PaymentAddressContainer1 = styled.View`
flex-direction: column;
margin-left: 10px;
`;

export const PayLocationImage = styled.Image`
width: 40px;
height: 40px;
`;

export const ProfileAddress = styled.Text`
font-size: 14px;
font-weight: bold;
`;

export const PayAddressLogoContainer = styled.View`
flex-direction: row;

`;

export const PayAddressLogo = styled.Text`
padding: 1px;
font-size: 11px;
border-radius: 10px;
background-color: ${quinary};
margin-right: 3px;
color: #fff;
text-align: center;
`;

export const PayAddressText = styled.Text`
font-size: 14px;
`;

export const PaymentAddressContainer2 = styled.View`
padding: 10px;
border-width: 1px;
background-color: ${background};
margin-top: 5px;
width: 100%;
`;

export const StoreLogoContainer = styled.View`
width: 100%;
flex-direction: row;
margin-top: 10px;
`;

export const StoreName = styled.Text`
font-size: 13px;
font-weight: bold;
`;

export const RatingContainer = styled.View`
width: 100%;
margin-top: 20px;
border-radius: 3px;
background-color: ${quinary};
align-items: center;
padding: 5px;
`;

export const RatingText = styled.Text`
font-size: 12px;
color: ${primary};
`;

export const PayItemsContainer = styled.View`
width: 100%;
border-width: 1px;
flex-direction: row;
height: 110px;
`;

export const PayImageAddContainer = styled.View`
  width: 30%;
  height: 75px;
  background-color: ${quinary};
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  margin: 10px;
`;

export const PayItemContainer1 = styled.View`
border-width: 1px;
`;

export const PayItemContainer2 = styled.View`

`;


export const PaySeventhContainer = styled.View`
  flex-direction: row;
`;

export const PayImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const PayButton = styled.TouchableOpacity`
  height: 35px;
  width: 80%;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const PayButtonText = styled.Text`
  font-size: 16px;
`;

export const AmountInput = styled.TextInput`
  width: 80%;
  height: 35px;
  border-radius: 20px;
  border-width: 1px;
  margin-top: 20%;
  padding-left: 10px;
`;

export const PayModalContainer = styled.View`
  align-items: center;
  background-color: rgba(128, 128, 128, 0.5);
  

`;

export const PayModalChildContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const PayModalTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin: 10px;
`;

export const PayAmount = styled.TextInput`
  width: 80%;
  height: 35px;
  border-width: 1px;
  border-radius: 7px;
  padding-left: 10px;
`;

export const PayButton2 = styled.TouchableOpacity`
  width: 80%;
  height: 35px;
  border-width: 1px;
  border-radius: 7px;
  padding-left: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const PayButton2Text = styled.Text`
  font-size: 16px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  justify-content: center;
  margin-top: 10px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const FooterTextButton = styled.Text`
  color: blue;
  font-size: 16px;
  text-align: center;
`;

export const FooterContainer2 = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const FooterButton = styled.TouchableOpacity`
  font-size: 16px;
  color: black;
`;
