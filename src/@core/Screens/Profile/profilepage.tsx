import React, { useEffect, useState } from "react";
import {
  AddLocationButton,
  AddLocationText,
  AddWalletButton,
  AddWalletText,
  AddWalletlogo,
  AllImage,
  AllImage1,
  AllNum,
  AllText1,
  Alltext,
  BackgroundImageProfile,
  CartButton,
  CurrentContainer,
  DropdownButton,
  DropdownContainer,
  HistoryButton,
  ImageContainer,
  ImageProfile5,
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
  Title2,
  TotalorderContainer,
  WalletContainer,
  WalletContainer1,
  WalletContainer2,
  WalletText,
  WalletTitle,
  WalletTitleContainer,
  WalletTitleLogo,
  WalletTitleLogo1,
  WishlistContainer,
  WishlistContainer1,
} from "./profile";
import { useUserData } from "../../hooks/Profile/profileUtils";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { background } from "../../theme/theme";

export default function Profilepage({ userId }: { userId: string }) {
  console.log("Received userId:", userId);
  const { userData, error } = useUserData();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const navigation = useNavigation<any>();

  const handleMapLocation = async () => {
    navigation.navigate("Location");
  };

  if (!userData) {
    // You can show a loading indicator or an error message here.
    return console.log("ERROR");
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
                    uri: `http://192.168.1.77:1337${user.image.formats.thumbnail.url}`,
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
        <FontAwesome5Icon name="list" size={24} color="#D70F64"  />
          <ProfileTitle>  My Orders</ProfileTitle>
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

        {/* /////////////////////////////// */}
        <WalletContainer>
          <DropdownContainer>
            <WalletTitleContainer>
              <DropdownButton onPress={toggleDropdown}>
                <FontAwesome5Icon name="wallet" size={25} color="#D70F64" />
                <WalletTitle> My balance </WalletTitle>
              </DropdownButton>
            </WalletTitleContainer>
            {isDropdownOpen && (
              <WalletContainer1>
                <WalletContainer2>
                  <WalletText>₱ {user.wallet.toLocaleString()} </WalletText>
                </WalletContainer2>
                <AddWalletButton>
                  <AddWalletlogo
                    source={require("../../../../assets/profileimages/addwallet.png")}
                  />
                  <AddWalletText>Add Funds</AddWalletText>
                </AddWalletButton>
              </WalletContainer1>
            )}
          </DropdownContainer>
        </WalletContainer>
        {/* ///////////////////////////////// */}

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
      </ProfileContainer>
    </ScrollView>
  );
}
