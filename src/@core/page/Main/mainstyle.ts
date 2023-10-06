import styled from "styled-components/native";
import {primary, secondary, tertiary} from '../../theme/theme';



export const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MainTitleContainer = styled.View`
background-color: ${secondary};
justify-content: center;
align-items: center;
`;

export const MainTitle = styled.Text`
font-size: 24px;
font-weight: bold;
color: ${tertiary};  
padding: 30px;
position: relative;
right: 21px;
top: 20px;
`;

export const MainSearch = styled.TextInput`
border-width: 1px;
border-color: ${secondary};
border-radius: 9px;
height: 40px;
width: 90%;
margin-bottom: 20px;
padding: 5px;
padding-left: 10px;
background-color: #fff;

`;

export const ParentCategoryContainer = styled.View`
justify-content: center;
align-items: center;
position: relative;
bottom: 10px;
border-bottom-right-radius: 19px;
border-bottom-left-radius: 19px;
background-color: ${secondary};
`;

export const CategoryContainer = styled.View`
width: 90%;
height: 50px;
justify-content: center;
align-items: center;
background-color: ${secondary};

`;

export const CategoryButtons = styled.TouchableOpacity`
border-width: 1px;
border-color: ${secondary};
border-bottom-color: ${secondary};
border-top-color: ${secondary};
border-left-color: ${secondary};
height: 30px;
width: 80px;
justify-content: center;
align-items: center;
position: relative;
`;

export const SaleContainer = styled.View`
height: 25%;
width: 100%;
align-items: center;
margin-bottom: 20px;
border-radius: 10px;

`;

export const SaleBorder = styled.View`
border-width: 1px;
border-color: #000;
border-radius: 20px;
height: 180px;
width: 90%;
`;

export const ParentProductContainer = styled.View`
flex: 1;
background-color: #fff;
`;

export const ProductContainer = styled.View`
background-color: #fff;
flex: 1;
width: 100%;
height: 150px;
padding-left: 20px;
padding-right: 20px;
`;

export const ProductButton = styled.TouchableOpacity`
border-width: 1px;
border-color: ${secondary}; 
border-radius: 20px;  
width: 90%;    
height: 120px;
padding: 20px;
margin-top: 10px;     
position: relative;
left: 8px;
justify-content: center;
align-items: center;
`;

export const ProductImage = styled.Image`
width: 50px;
height: 50px;
margin-bottom: 3px;
`;



