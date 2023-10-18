import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { LatLng, Marker, Region } from "react-native-maps";
import MapView from "react-native-maps";
import {
  AddAdressButton,
  AddAdressText,
  AddressContainer,
  AddressContainer1,
  AddressText,
  DateText,
  LocationContainer,
  LocationContainer2,
  LocationContainer3,
  LocationContainer4,
  TimerText,
} from "./mapLocationStyle";
import * as Location from "expo-location";
import TextTicker from "react-native-text-ticker";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useLocation } from "../../hooks/Location/locationUtils";
import { useCurrentTime } from "../../hooks/Location/timedataUtils";

export default function MapLocation() {
  const { region, x, address, onMarkerDragEnd, isLoading } = useLocation();
  const { currentDate, currentTime } = useCurrentTime();

  return (
    <LocationContainer>
      <LocationContainer2>
        <MapView
          region={region}
          style={{ flex: 1, width: "100%", height: "100%" }} // Adjust the style as needed
        >
          <Marker
            draggable
            coordinate={x}
            onDragEnd={(e) => onMarkerDragEnd(e)}
          />
        </MapView>
        <AddressContainer>
          {isLoading ? (
            <>
              <ActivityIndicator size="small" color="#fff" />
              <Text style={{ color: "#fff" }}>    Getting location...</Text>
            </>
          ) : (
            <>
              <FontAwesome5Icon name="map-marker-alt" size={15} color="#fff" />
              <AddressContainer1>
                <TextTicker
                  style={{ color: "#fff" }}
                  duration={7000}
                  bounceSpeed={7000}
                  animationType="bounce"
                  marqueeDelay={1000}
                  shouldAnimateTreshold={0}
                >
                  {address}
                </TextTicker>
              </AddressContainer1>
            </>
          )}
        </AddressContainer>
      </LocationContainer2>
      <LocationContainer3>
        <TimerText>{currentTime.toLocaleTimeString()}</TimerText>
        <DateText>
          Today is{" "}
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </DateText>
      </LocationContainer3>
      <LocationContainer4>
        <AddAdressButton>
          <FontAwesome5Icon name="map" size={30} color="#000" />
          <AddAdressText>Add This Address</AddAdressText>
        </AddAdressButton>
      </LocationContainer4>
    </LocationContainer>
  );
}
