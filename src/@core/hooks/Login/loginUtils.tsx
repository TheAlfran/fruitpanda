import { useEffect, useState } from "react";
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

      const authToken = response.data.jwt;
      const userId = response.data.user.id;
      console.log("eewqeqw", userId);

      await AsyncStorage.setItem("userId", userId.toString());
      await AsyncStorage.setItem("authToken", authToken);

      console.log("Stored authToken:", authToken);
      console.log("Stored userId:", userId);

      navigation.reset({
        index: 0,
        routes: [{ name: "Navigate", params: { userId: Number(userId) } }],
      });

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
      navigation.navigate("Navigate", { userId: 1 });
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

  const showAllData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      console.log("Stored data:", result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const authToken = await AsyncStorage.getItem("authToken");
      const userId = await AsyncStorage.getItem("userId");

      if (authToken && userId) {
        navigation.navigate("Navigate", { userId: Number(userId) });
      } else {
        navigation.navigate("Login");
      }
    };

    checkUserLoggedIn();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userId");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });

      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
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
    logout,
  };
};
