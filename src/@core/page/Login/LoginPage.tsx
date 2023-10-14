import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Text, Image, Alert } from "react-native";
import {
  ButtonText,
  InputContainer,
  LoginBox,
  LoginButton,
  LoginContainer,
  LoginText,
  ParentContainer1,
  Password,
  PasswordContainer,
  RegisterButton,
  RegisterButtonText,
  RegisterContainer,
  Registertext, 
  ShowPasswordButton,
  ShowPasswordIcon,
  TitleContainer1,
  TitleIcon,
  TitleText,
  Username,
} from "./loginstyle";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // State for username input
  const [password, setPassword] = useState("");
  const [isSecureEntry, setSecureEntry] = useState(true);
  const navigation = useNavigation<any>();
  const togglePasswordVisibility = () => {
    setSecureEntry(!isSecureEntry);
  };

  const submitLogin = async () => {
    console.log("first", username);
    console.log("fffs", password);
    try {
      // Make a POST request to your Strapi authentication endpoint
      const response = await axios.post(
        "http://192.168.1.77:1337/api/auth/local",
        {
          identifier: username, // Use the username or email entered by the user
          password: password,
        }
      );

      // If the login is successful, you can save the authentication token
      const authToken = response.data.jwt;

      // Store the token in AsyncStorage for future requests
      await AsyncStorage.setItem("authToken", authToken);

      // Redirect to another screen (e.g., Home) after successful login
      navigation.navigate("Navigate");

      console.log("Login successful");
    } catch (error) {
      // Handle login error (e.g., incorrect credentials)
      console.error("Login failed:", error);

      // Show an alert to the user indicating login failure
      Alert.alert(
        "Login Failed",
        "Please check your credentials and try again."
      );
    }
  };

  return (
    <ParentContainer1>
      <TitleContainer1>
        <TitleIcon source={require("../../../../assets/shop.png")}></TitleIcon>
        <TitleText> Fruit Panda</TitleText>
      </TitleContainer1>
      <LoginContainer>
        <LoginBox>
          <LoginText>Login</LoginText>
          <InputContainer>
            <Username
              placeholder="username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            ></Username>
            <PasswordContainer>
              <Password
                placeholder="password"
                secureTextEntry={isSecureEntry}
                value={password}
                onChangeText={(text) => setPassword(text)}
              ></Password>
              <ShowPasswordButton onPress={togglePasswordVisibility}>
                <ShowPasswordIcon
                  source={
                    isSecureEntry
                      ? require("../../../../assets/eye.png")
                      : require("../../../../assets/visible.png")
                  }
                />
              </ShowPasswordButton>
            </PasswordContainer>
            <LoginButton onPress={submitLogin}>
              <ButtonText>Login</ButtonText>
            </LoginButton>
            <RegisterContainer>
              <Registertext>Dont have account? Register </Registertext>
              <RegisterButton>
                <RegisterButtonText>here</RegisterButtonText>
              </RegisterButton>
            </RegisterContainer>
          </InputContainer>
        </LoginBox>
      </LoginContainer>
    </ParentContainer1>
  );
}
