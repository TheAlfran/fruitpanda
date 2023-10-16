import styled from "styled-components/native";
import { background, primary, quinary, secondary } from "../../theme/theme";

export const ProfileContainer = styled.View`
background-color: ${background};
`;

export const ProfileChildContainer = styled.View`

padding: 60px;
`;

export const BackgroundImageProfile = styled.ImageBackground`
border-radius: 10px;


`;

export const ProfileChildContainer1 = styled.View`
flex-direction: row;
`;

export const ImageContainer = styled.View`
border-width: 1px;
border-radius: 50px;
right: 50px;
border-color: transparent;
`;

export const ImageProfile5 = styled.Image`
width: 80px;
height: 80px;
border-radius: 10px;
`;

export const NameContainer = styled.View`
flex-direction: column;
justify-content: center;
margin-left: 10px;
`;

export const NameContainer1 = styled.View`
right: 50px;
`;


export const NameContainer2 = styled.View`
right: 50px;
border-radius: 20px;
padding: 5px;
background-color: #f7ce52;
`;

export const NameText = styled.Text`
font-size: 16px;
font-weight: 700;
color: ${background};
`;

export const StatusText = styled.Text`
font-size: 11px;
font-weight: 700;
color: ${background};
`;

export const WishlistContainer = styled.View`
flex-direction: row;
top: 50px;
justify-content: center;
width: 100%;
`;

export const WishlistContainer1 = styled.View`
padding: 20px;
align-items: center;
justify-content: center;
`;

export const CurrentContainer = styled.View`
border-width: 1px;
border-top-color: transparent;
border-bottom-color: transparent;
border-right-color: ${background};
border-left-color: ${background};
padding-left: 35px;
padding-right: 35px;
align-items: center;
justify-content: center;

`;

export const TotalorderContainer = styled.View`
padding: 20px;
align-items: center;
justify-content: center;
`;

export const Alltext = styled.Text`
font-size: 14px;
color: ${background};
`;

export const ProfileContainerTitle = styled.View`
padding-left: 20px;
top: 10px;
flex-direction: row;
`;

export const ProfileTitle = styled.Text`
font-size: 20px;
font-weight: bold;
`;

export const ProfileTitleLogo = styled.Image`
width: 25px;
height: 25px;
margin-right: 5px;
`;

export const ProfileBodyContainer = styled.View`
border-width: 1px;
border-radius: 10px;
padding: 15px;
flex-direction: row;
justify-content: space-evenly;
margin: 15px
`;


export const OrderButton = styled.TouchableOpacity`
padding: 10px;
flex-direction: column;
align-items: center;
`;

export const CartButton = styled.TouchableOpacity`
padding: 10px;
flex-direction: column;
align-items: center;
`;

export const ShippedButton = styled.TouchableOpacity`
padding: 10px;
flex-direction: column;
align-items: center;
`;

export const HistoryButton = styled.TouchableOpacity`
padding: 10px;
flex-direction: column;
align-items: center;
`;

export const AllText1 = styled.Text`

`;

export const AllImage = styled.Image`
width: 30px;
height: 30px;
`;


export const AllImage1 = styled.Image`
width: 30px;
height: 30px;
`;


export const FooterProfileContainer = styled.View`

`;
