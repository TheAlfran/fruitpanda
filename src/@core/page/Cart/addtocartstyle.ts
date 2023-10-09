import styled from "styled-components/native";
import { primary, quinary, senary } from "../../theme/theme";


export const CartParentContainer = styled.View`
padding: 20px;
margin-top: 10px;
width: 100%;

`;


export const CartChildContainter = styled.View`
padding: 20px;
width: 100%;
height: 80%;
border-color: black;
border-width: 1px;
border-radius: 20px;
margin-top: 10px;


`;
export const CartSecondChildContainter = styled.View`
flex-direction: row;
margin: 5px;
border-width: 1px;
border-radius: 10px;
width: 100%;
height: 100px;
position: relative;
right: 5%;


`;

export const CartTextContainer = styled.View`
width: 50%;
height: 40px;
justify-content: center;
text-align: center;
border-width: 1px;
border-color: black;
margin: 30px;
position: relative;
right: 28px;
`;

export const CartTitle = styled.Text`
font-size: 32px;
font-weight: bold;
color: ${primary};
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
text-align: center;
padding: 15px;
border-radius: 100px;
margin: 10px;
`;

export const CartImageAdd = styled.Image`
width: 50px;
height: 50px;

`;

export const CartFooterContainer = styled.View`
width: 100%;
height: 11%;
border-width: 1px;
border-color: black;
margin-top: 15px;
`;

export const CartFooterText = styled.View`

`;

