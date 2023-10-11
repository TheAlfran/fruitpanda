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


export const CartModalFooter = styled.View`
height: 50%;
width: 90%;
`;






