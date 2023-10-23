import React, { useEffect, useState } from "react";
import {
  AddLocationButton,
  AddLocationText,
  AllImage,
  AllImage1,
  AllNum,
  AllText1,
  Alltext,
  BackgroundImageProfile,
  CartButton,
  CashinButton,
  CashinButtonContainer,
  CashinText,
  CurrentContainer,
  DropdownButton,
  DropdownContainer,
  HistoryButton,
  ImageContainer,
  ImageProfile5,
  LogoutButton,
  LogoutButtonText,
  MapButton,
  MapContainer,
  MapContainer1,
  MapContainer2,
  MapDropdownContainer,
  MapTitle,
  MapTitleContainer,
  NameContainer,
  NameContainer1,
  NameContainer2,
  NameText,
  OrderButton,
  ProfileBodyContainer,
  ProfileChildContainer,
  ProfileChildContainer1,
  ProfileContainer,
  ProfileContainerTitle,
  ProfileTitle,
  ProfileTitleLogo,
  ShippedButton,
  StatusText,
  SubWalletContainer,
  SubWalletContainer1,
  SubWalletContainer2,
  Title2,
  TotalorderContainer,
  TransactionText,
  WalletContainer,
  WalletContainer1,
  WalletContainer2,
  WalletContainer3,
  WalletText,
  WalletTitle,
  WalletTitleContainer,
  WishlistContainer,
  WishlistContainer1,
} from "./profile";
import { useUserData } from "../../hooks/Profile/profileUtils";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { background } from "../../theme/theme";
import { BASE_URL } from "../../hooks/Global/baseURL";
import { useAuth } from "../../hooks/Login/loginUtils";
const baseUrl = `${BASE_URL}`;

export default function Profilepage() {

  const {logout} = useAuth();

  

  const fetchUserId = useUserData();
  console.log("Received userId:", fetchUserId);
  const { userData, error } = useUserData();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const navigation = useNavigation();
  const handleMapLocation = async () => {
    navigation.navigate("Location");
  };

  if (!userData) {
    console.log("ERROR")
    return null;
  }
  const user = userData;

  return (
    <ScrollView>
      <ProfileContainer key={user.id}>
        <BackgroundImageProfile
          source={require("../../../../assets/profileimages/wallp2.png")}
        >
          <ProfileChildContainer>
            <ProfileChildContainer1>
              <ImageContainer>
                <ImageProfile5
                  source={{
                    uri: `${baseUrl}${user.image.formats.thumbnail.url}`,
                  }}
                />
              </ImageContainer>
              <NameContainer>
                <NameContainer1>
                  <NameText>{user.username}</NameText>
                </NameContainer1>
                <NameContainer2>
                  <StatusText>{user.status}</StatusText>
                </NameContainer2>
              </NameContainer>
            </ProfileChildContainer1>
            <WishlistContainer>
              <WishlistContainer1>
                <AllNum>0</AllNum>
                <Alltext>Wishlist</Alltext>
              </WishlistContainer1>
              <CurrentContainer>
                <AllNum>0</AllNum>
                <Alltext>Orders</Alltext>
              </CurrentContainer>
              <TotalorderContainer>
                <AllNum>0</AllNum>
                <Alltext>Total</Alltext>
              </TotalorderContainer>
            </WishlistContainer>
          </ProfileChildContainer>
        </BackgroundImageProfile>
        <ProfileContainerTitle>
          <FontAwesome5Icon name="shopping-bag" size={24} color="#D70F64" />
          <ProfileTitle> My Orders</ProfileTitle>
        </ProfileContainerTitle>
        <ProfileBodyContainer>
          <CartButton>
            <AllImage
              source={require("../../../../assets/profileimages/shoppingcart.png")}
            />
            <AllText1>To pay</AllText1>
          </CartButton>
          <OrderButton>
            <AllImage
              source={require("../../../../assets/profileimages/package.png")}
            />
            <AllText1>Orders</AllText1>
          </OrderButton>
          <ShippedButton>
            <AllImage
              source={require("../../../../assets/profileimages/deliverytruck.png")}
            />
            <AllText1>Shipped</AllText1>
          </ShippedButton>
          <HistoryButton>
            <AllImage
              source={require("../../../../assets/profileimages/history.png")}
            />
            <AllText1>History</AllText1>
          </HistoryButton>
        </ProfileBodyContainer>
        <Title2>Profile</Title2>
        <WalletContainer>
          <DropdownContainer>
            <WalletTitleContainer>
              <DropdownButton onPress={toggleDropdown}>
                <FontAwesome5Icon name="wallet" size={25} color="#D70F64" />
                <WalletTitle> Fruit Wallet </WalletTitle>
              </DropdownButton>
            </WalletTitleContainer>
            {isDropdownOpen && (
              <WalletContainer1>
                <WalletContainer2>
                  <SubWalletContainer2>
                    <SubWalletContainer1>
                      <WalletText>PHP </WalletText>
                    </SubWalletContainer1>
                    <SubWalletContainer>
                      <WalletText>{user.wallet.toLocaleString()} </WalletText>
                    </SubWalletContainer>
                  </SubWalletContainer2>
                  <CashinButtonContainer>
                    <CashinButton>
                      <CashinText>Cash In</CashinText>
                    </CashinButton>
                  </CashinButtonContainer>
                </WalletContainer2>
                <WalletContainer3>
                  <TransactionText> Transaction</TransactionText>
                  <TransactionText> History</TransactionText>
                </WalletContainer3>
              </WalletContainer1>
            )}
          </DropdownContainer>
        </WalletContainer>

        <MapContainer>
          <MapDropdownContainer>
            <MapTitleContainer>
              <MapButton onPress={toggleDropdown1}>
                <FontAwesome5Icon
                  name="map-marker-alt"
                  size={25}
                  color="#D70F64"
                />
                <MapTitle> My Location</MapTitle>
              </MapButton>
            </MapTitleContainer>
            {isDropdownOpen1 && (
              <MapContainer1>
                <MapContainer2></MapContainer2>
                <AddLocationButton onPress={handleMapLocation}>
                  <AddLocationText> Change Location </AddLocationText>
                </AddLocationButton>
              </MapContainer1>
            )}
          </MapDropdownContainer>
        </MapContainer>
        <LogoutButton onPress={logout}>
          <LogoutButtonText>
            Logout
          </LogoutButtonText>
        </LogoutButton>
      </ProfileContainer>
    </ScrollView>
  );
}
