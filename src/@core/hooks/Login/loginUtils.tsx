import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native/Libraries/Alert/Alert";
import { BASE_URL } from "../Global/baseURL";
const baseUrl = `${BASE_URL}`;

export const useAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setSecureEntry] = useState(true);
  const navigation = useNavigation<any>();

  const togglePasswordVisibility = () => {
    setSecureEntry(!isSecureEntry);
  };

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/local`, {
        identifier: username,
        password: password,
      });

      //Store the authtoken to the aysnc storage
      const authToken = response.data.jwt;
      await AsyncStorage.setItem("authToken", authToken);
      console.log("Stored authToken:", authToken); //make sure that the token is stored in the aysncstorage

      //Store the UID of the data to aysnc storage
      const userId = response.data.user.id;
      await AsyncStorage.setItem("userId", userId.toString());
      console.log("Stored userId:", userId);// also make sure that it is stored

      return { authToken, userId };
    } catch (error) {
      if (error instanceof Error) {
        if (error.cause && error.cause === 400) {
          Alert.alert(
            "Login Failed",
            "Invalid username or password. Please try again."
          );
        } else {
          Alert.alert(
            "Login Failed",
            "An unexpected error occurred. Please try again later."
          );
        }
        console.error(error);
      }
      throw error;
    }
    
    
  };

  const { mutate, isLoading, reset } = useMutation(login, {
    onSuccess: (data) => {
      navigation.navigate("Navigate");
    },
    onError: (error) => {
      reset();
      Alert.alert(
        "Login Failed",
        "Please check your credentials and try again."
      );
    },
  });

  const handleLogin = async () => {
    await mutate({ username, password });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isSecureEntry,
    togglePasswordVisibility,
    handleLogin,
    isLoading,
  };
};
