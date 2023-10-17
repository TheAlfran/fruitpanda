import React, { useEffect, useState } from "react";
import {
  AddWalletButton,
  AddWalletText,
  AddWalletlogo,
  AllImage,
  AllImage1,
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


export default function Profilepage({ userId }: { userId: string }) {
  console.log('Received userId:', userId);
  const {userData, error} = useUserData();
  
  if (!userData) {
    // You can show a loading indicator or an error message here.
    return console.log("ERROR");
  }
  const user = userData;
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <ScrollView>
    <ProfileContainer key={user.id}>
      <BackgroundImageProfile
        source={require("../../../../assets/profileimages/background.png")}
      >
        <ProfileChildContainer>
          <ProfileChildContainer1 >
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
              <Alltext>Wishlist</Alltext>
            </WishlistContainer1>
            <CurrentContainer>
              <Alltext>Orders</Alltext>
            </CurrentContainer>
            <TotalorderContainer>
              <Alltext>Total</Alltext>
            </TotalorderContainer>
          </WishlistContainer>
        </ProfileChildContainer>
      </BackgroundImageProfile>
      <ProfileContainerTitle>
        <ProfileTitleLogo source={require("../../../../assets/profileimages/checklist.png")}/>
        <ProfileTitle>
          My Orders
        </ProfileTitle>
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

      
      <WalletContainer>
      <DropdownContainer>
        <WalletTitleContainer>
        <DropdownButton onPress={toggleDropdown}>
          <WalletTitleLogo source={require('../../../../assets/profileimages/wallet.png')}/>
          <WalletTitle> My balance  </WalletTitle>
          <WalletTitleLogo1 source={require('../../../../assets/profileimages/dropdown.png')}/>
        </DropdownButton>
        </WalletTitleContainer>
        {isDropdownOpen && (
        <WalletContainer1>
          <WalletContainer2>
            <WalletText>₱ {user.wallet.toLocaleString()} </WalletText>
          </WalletContainer2>
          <AddWalletButton>
            <AddWalletlogo source={require('../../../../assets/profileimages/addwallet.png')}/>
            <AddWalletText>
              Add Funds
            </AddWalletText>
          </AddWalletButton>
        </WalletContainer1>
        )}
        </DropdownContainer>
      </WalletContainer>



    </ProfileContainer>
    </ScrollView>
  );
}
