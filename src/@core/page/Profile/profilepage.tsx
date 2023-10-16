import React, { useEffect, useState } from "react";
import {
  AllImage,
  AllImage1,
  AllText1,
  Alltext,
  BackgroundImageProfile,
  CartButton,
  CurrentContainer,
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
  WishlistContainer,
  WishlistContainer1,
} from "./profile";
import { useUserData } from "../../hooks/Profile/profileUtils";
import { topayPage } from "../../hooks/Profile/tocartPage";


export default function Profilepage() {
  const userData = useUserData();

  const handleNavigationCart = topayPage();

  

  return (
    <ProfileContainer>
      <BackgroundImageProfile
        source={require("../../../../assets/profileimages/background.png")}
      >
        <ProfileChildContainer>
          <ProfileChildContainer1>
            {userData.map((user) => (
              <ImageContainer key={user.id}>
                <ImageProfile5
                  source={{
                    uri: `http://192.168.1.77:1337${user.image.formats.thumbnail.url}`,
                  }}
                />
              </ImageContainer>
            ))}
            {userData.map((user) => (
              <NameContainer key={user.id}>
                <NameContainer1>
                  <NameText>{user.username}</NameText>
                </NameContainer1>
                <NameContainer2>
                  <StatusText>{user.status}</StatusText>
                </NameContainer2>
              </NameContainer>
            ))}
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
    </ProfileContainer>
  );
}
