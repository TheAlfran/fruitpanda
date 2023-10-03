import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {Text, Image} from 'react-native'
import { ButtonText, InputContainer, LoginBox, LoginButton, LoginContainer, LoginText, ParentContainer1, Password, PasswordContainer, RegisterButton, RegisterButtonText, RegisterContainer, Registertext, ShowPasswordButton, ShowPasswordIcon, TitleContainer1, TitleIcon, TitleText, Username } from './loginstyle'
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [isSecureEntry, setSecureEntry] = useState(true);
  const togglePasswordVisibility = () => {
    setSecureEntry(!isSecureEntry);
  };

   const submitLogin = () => {
      console.log('test')

   }
  
  
  return (
    <ParentContainer1>
      <TitleContainer1>
      <TitleIcon source={require('../assets/logo.png')}></TitleIcon>
        <TitleText> Fruit Panda</TitleText>
      </TitleContainer1>
      <LoginContainer>
        <LoginBox>
          <LoginText>Login</LoginText>
          <InputContainer>
            <Username placeholder='username'></Username>
            <PasswordContainer>
              <Password placeholder='password' secureTextEntry={isSecureEntry} value={password} onChangeText={(text) => setPassword(text)}></Password>
                <ShowPasswordButton onPress={togglePasswordVisibility}>
                  <ShowPasswordIcon source={isSecureEntry ? require('../assets/eye.png') : require('../assets/visible.png')}/>
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

  )
}


