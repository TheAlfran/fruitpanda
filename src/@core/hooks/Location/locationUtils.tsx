import { useState } from 'react';
import * as Location from 'expo-location';
import { LatLng } from 'react-native-maps';
import { useQuery } from 'react-query';

export interface LocationState {
  region: Region;
  x: LatLng;
  address: string;
  onMarkerDragEnd: (e: any) => Promise<void>;
  isLoading: boolean;
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export function useLocation(): LocationState {
  const initialRegion: Region = {
    latitude: 8.501862,
    longitude: 124.632478,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  const [region, setRegion] = useState<Region>(initialRegion);
  const [x, setX] = useState<LatLng>({
    latitude: initialRegion.latitude,
    longitude: initialRegion.longitude,
  });
  const [address, setAddress] = useState<string>('');

  const onMarkerDragEnd = async (e: any) => {
    setX(e.nativeEvent.coordinate);
    const result = await Location.reverseGeocodeAsync(e.nativeEvent.coordinate);
    setAddress(
      result[0].street + ', ' + result[0].city + ', ' + result[0].country
    );
  };

  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setX({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
  
      const result = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setAddress(
        result[0].street + ', ' + result[0].city + ', ' + result[0].country
      );
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };
  

  const { isLoading } = useQuery('location', fetchLocation, {
    staleTime: Infinity, // The data will never be considered stale
  });

  return { region, x, address, onMarkerDragEnd, isLoading };
}
