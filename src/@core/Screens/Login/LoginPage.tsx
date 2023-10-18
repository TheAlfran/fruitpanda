import React, { useState } from "react";
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
import { QueryClient } from "react-query";
import { useAuth } from "../../hooks/Login/loginUtils";

export default function LoginPage() {
  const {username, setUsername, password, setPassword, isSecureEntry, togglePasswordVisibility, handleLogin, isLoading,} = useAuth();


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
            <LoginButton onPress={handleLogin} disabled={isLoading}>
              <ButtonText>{isLoading ? "Logging in..." : "Login"}</ButtonText>
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
