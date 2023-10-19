import styled from "styled-components/native";
import { background, secondary } from "../../theme/theme";
import { Platform } from "react-native";


export const LocationContainer = styled.View`
align-items: center;
background-color: ${background};
`;

export const LocationContainer2 = styled.View`
width: 100%;
height: 76%;
align-items: center;

`;

export const AddressContainer = styled.View`
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 20px;
width: 60%;
height: 30px;
background-color: ${secondary};
bottom: 50px;
align-items: center;
flex-direction: row;
`;

export const AddressContainer1 = styled.View`
width: 85%;
margin-left: 15px;
flex-direction: row;
`;

export const AddressText = styled.Text`
color: ${background};
font-size: 14px;
`;

export const LocationContainer3 = styled.View`
align-items: center;
border-width: 1px;
padding: 10px;
width:100%;
bottom: 40px;
border-top-color: transparent;
border-right-color: transparent;
border-left-color: transparent;
border-bottom-color: grey;
`;

export const TimerText = styled.Text`
font-size: 32px;
font-weight: bold;
`;

export const DateText = styled.Text`
font-size: 16px;
margin-top: 6px;
margin-bottom: 10px;
`;

export const LocationContainer4 = styled.View`
align-items: center;
width: 100%;
padding: 20px;
bottom: 15px;
`;

export const AddAdressButton = styled.TouchableOpacity`
border-width: 1px;
border-radius: 8px;
bottom: 30px;
flex-direction: row;
width: 90%;
align-items: center;
justify-content: center;
`;

export const AddAdressText = styled.Text`
font-size: 14px;
padding: 10px;

`;

export const ExitButton = styled.TouchableOpacity`
border-radius: 20px;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 20px;
padding-right: 20px;
bottom: 135%;
right: 20%;
background-color: ${background};
flex-direction: row;
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

export const ExitButtonText = styled.Text`
font-size: 12px;
color: ${secondary};
`



