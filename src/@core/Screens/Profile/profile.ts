import styled from "styled-components/native";
import { background, primary, quinary, secondary } from "../../theme/theme";

export const ProfileContainer = styled.View`
  background-color: ${background};
`;

export const ProfileChildContainer = styled.View`
  padding: 60px;
  width: 100%;
`;

export const BackgroundImageProfile = styled.ImageBackground`
  border-radius: 10px;
  background-color: ${secondary};
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
  background-color: ${background};
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const WishlistContainer1 = styled.View`
  padding: 10px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const CurrentContainer = styled.View`
  border-width: 1px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: ${secondary};
  border-left-color: ${secondary};
  padding-left: 35px;
  padding-right: 35px;
  align-items: center;
  justify-content: center;
 
`;

export const TotalorderContainer = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  
`;

export const Alltext = styled.Text`
  font-size: 11px;
  color: ${secondary};

`;


export const AllNum = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${secondary};
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
  margin: 15px;
`;

export const Title2 = styled.Text`
font-size: 32px;
font-weight: bold;
text-align: center;
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

export const AllText1 = styled.Text``;

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


//Dropdown *********
export const WalletContainer = styled.View`

`;

export const DropdownContainer = styled.View`
`;


export const DropdownButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  width: 95%;
`;

export const WalletTitleContainer = styled.View`
flex-direction: row;
padding-left: 20px;

`;

export const WalletTitle = styled.Text`
font-size: 16px;
text-align: left;
`;


export const WalletTitleLogo = styled.Image`
  width: 25px;
  height: 25px;
`;

export const WalletTitleLogo1= styled.Image`
  width: 20px;
  height: 20px;
  top: 5px;
`;

export const WalletContainer1 = styled.View`
width: 100%;
align-items: center;
margin-top: 10px;
`;

export const WalletContainer2 = styled.View`
border-width: 1px;
border-radius: 10px;
padding: 20px;
width: 93%;
`;

export const AddWalletButton = styled.TouchableOpacity`
border-width: 1px;
border-radius: 10px;
padding: 10px;
margin-top: 10px;
width: 93%;
flex-direction: row;
justify-content: center;
`;

export const AddWalletText= styled.Text`
font-size: 16px;
text-align: center;
margin-left: 2px;
`;


export const AddWalletlogo = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const WalletText = styled.Text`
font-size: 30px;
font-weight: bold;

`;


//Until Here *********




export const MapContainer = styled.View`


`;

export const MapDropdownContainer = styled.View`

`;

export const MapTitleContainer = styled.View`
flex-direction: row;
padding-left: 20px;

`;

export const MapButton= styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  width: 95%;
`;

export const MapTitle = styled.Text`
font-size: 16px;
text-align: left;

`;

export const MapContainer1 = styled.View`
width: 100%;
align-items: center;
margin-top: 10px;
`;

export const MapContainer2 = styled.View`
border-width: 1px;
border-radius: 10px;
padding: 20px;
width: 93%;

`;

export const MapDisplay = styled.View`

`;

export const AddLocationButton = styled.TouchableOpacity`
border-width: 1px;
border-radius: 10px;
padding: 10px;
margin-top: 10px;
width: 93%;
flex-direction: row;
justify-content: center;

`;

export const AddLocationlogo = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const AddLocationText = styled.Text`
font-size: 16px;
text-align: center;
margin-left: 2px;
`;



