import styled from "styled-components/native";



export const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MainTitleContainer = styled.View`
background-color: #fff;
justify-content: center;
align-items: center;
`;

export const MainTitle = styled.Text`
font-size: 24px;
font-weight: bold;
color: #b30000;
padding: 30px;
position: relative;
right: 21px;
top: 20px;
`;

export const MainSearch = styled.TextInput`
border-width: 1px;
border-color: #FFA726;
border-radius: 15px;
height: 30px;
width: 90%;
margin-bottom: 20px;
padding: 5px;
padding-left: 10px;

`;

export const ParentCategoryContainer = styled.View`
justify-content: center;
align-items: center;

`;

export const CategoryContainer = styled.View`
width: 90%;
height: 50px;
justify-content: center;
align-items: center;
background-color: #fff;

`;

export const CategoryButtons = styled.TouchableOpacity`
border-width: 1px;
border-color: #FFA726;
border-bottom-color: #fff;
border-top-color: #fff;
border-left-color: #fff;
height: 30px;
width: 80px;
justify-content: center;
align-items: center;
position: relative;
`;

