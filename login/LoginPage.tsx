import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {Text } from 'react-native'
import { ButtonText, InputContainer, LoginBox, LoginButton, LoginContainer, LoginText, ParentContainer1, Password, RegisterButton, RegisterButtonText, RegisterContainer, Registertext, TitleContainer1, TitleIcon, TitleText, Username } from './loginstyle'

export default function LoginPage() {
  return (
    <ParentContainer1>
      <TitleContainer1>
      <TitleIcon source={require('../assets/apple.png')}></TitleIcon>
        <TitleText> Fruit Panda</TitleText>
      </TitleContainer1>
      <LoginContainer>
        <LoginBox>
          <LoginText>Login</LoginText>
          <InputContainer>
            <Username placeholder='username'></Username>
            <Password placeholder='password'></Password>
            <LoginButton>
              <ButtonText>Login</ButtonText>
            </LoginButton>
            <RegisterContainer>
              <Registertext>Don't have account? Register </Registertext>
              <RegisterButton>
                <RegisterButtonText>here</RegisterButtonText>
              </RegisterButton>
            </RegisterContainer>
          </InputContainer>
        </LoginBox>
      </LoginContainer>
    </ParentContainer1>
  )
}


