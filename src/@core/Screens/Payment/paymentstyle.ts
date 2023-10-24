import styled from "styled-components/native";
import { background, quinary, secondary, senary } from "../../theme/theme";
import { Platform } from "react-native";

export const PaymentParentContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${background};
  align-items: center;
`;

export const PaymentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
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

export const PaymentLine1 = styled.View`
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


export const PaySecondChildContainter = styled.View`
  flex-direction: row;
  border-radius: 10px;
  background-color: ${background};
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-right-width: 2px;
  border-color: ${secondary};
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

export const PayImageAdd = styled.Image`
  width: 50px;
  height: 50px;
`;


export const PayImageAddContainer = styled.View`
  
  height: 75px;
  background-color: ${quinary};
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
  margin-left: 5px;
`;

export const PayTextContainer = styled.View`
  text-align: center;
  margin-left: 10px;
`;


export const PayText = styled.Text`
  font-size: 12px;
  font-weight: bold;
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
  border-radius: 5px;
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
  font-size: 13px;
  margin-left: 10px;
  color: grey;
`;

export const PaymentButtonText = styled.Text`
  font-size: 16px;
  color: ${background};
`;

export const CheckboxButton = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-width: 1px;
`;
