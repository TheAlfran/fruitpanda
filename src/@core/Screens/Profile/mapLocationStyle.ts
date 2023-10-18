import styled from "styled-components/native";
import { background, secondary } from "../../theme/theme";


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
bottom: 25px;
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



