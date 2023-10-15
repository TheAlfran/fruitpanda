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

  const login = async ({ username, password }: {username:string ; password:string}) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/auth/local`,
        {
          identifier: username,
          password: password,
        }
      );

      const authToken = response.data.jwt;
      await AsyncStorage.setItem("authToken", authToken);
      return authToken;
    } catch (error) {
      throw error;
    }
  };

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: (data) => {
      navigation.navigate("Navigate");
    },
    onError: (error) => {
      Alert.alert("Login Failed", "Please check your credentials and try again.");
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
