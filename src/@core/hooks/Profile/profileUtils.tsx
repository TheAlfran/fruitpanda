import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";  // Import AsyncStorage
import { User } from '../Global/userList';

export function useUserData() {  // Remove userId from parameters
  const [userData, setUserData] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);  // Add this line
  const [error, setError] = useState(null);



  const fetchUserId = async () => {
    const storedUserId = await AsyncStorage.getItem("userId");
    console.log("Stored", storedUserId)
    setUserId(storedUserId);

    return storedUserId;
  };


  useEffect(() => {
    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {  // Only run if userId is not null
      axios.get(`http://192.168.1.77:1337/api/users/${userId}?populate=image`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
          setError(error);
        });
    }
  }, [userId]);  // Add userId to dependency array

  return {userData, error};
}
